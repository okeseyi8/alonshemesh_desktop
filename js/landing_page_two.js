document.addEventListener("DOMContentLoaded", function () {
    var $draggableLink = $('.inner_body_con_right_div');
    var $dropZone = $('#drop-zone-2');
    const container = document.getElementById('drop-zone-2');
    var draggedElement;
    var path = 'images/stations/';
    var close_btn = this.getElementsByClassName('fa-xmark');
    

    // Check if the cookie exists
    var cookieValue = getCookie("linksAndImagesCookie");
    var linksAndImages = cookieValue ? JSON.parse(cookieValue) : [];

    // Fill linksAndImages with top ten links if it's empty
    if (linksAndImages.length === 0) {
        linksAndImages = [
            // { href: "glgltz.html", src: "images/stations/glgltz.png", alt: "גלגלצ", title: "גלגלצ" },
            // { href: "glgltz.html", src: "images/stations/glgltz.png", alt: "גלגלצ", title: "גלגלצ" },
            // { href: "glgltz.html", src: "images/stations/glgltz.png", alt: "גלגלצ", title: "גלגלצ" },
            // { href: "kan-88.html", src: "images/stations/kan-88.png", alt: "כאן 88", title: "כאן 88" },
            // { href: "galey-israel.html", src: "images/stations/galey-israel.png", alt: "גלי ישראל", title: "גלי ישראל" },
            // { href: "kan-bet.html", src: "images/stations/kan-bet.png", alt: "כאן ב", title: "כאן ב" },
            // { href: "radio-darom.html", src: "images/stations/radio-darom.png", alt: "רדיו דרום", title: "רדיו דרום" },
            // { href: "kan-gimmel.html", src: "images/stations/kan-gimmel.png", alt: "כאן גימל", title: "כאן גימל" },
            // { href: "eco99fm.html", src: "images/stations/eco99fm.png", alt: "אקו 99FM", title: "אקו 99FM" },
            // { href: "100fm.html", src: "images/stations/100fm.png", alt: "רדיוס 100FM", title: "רדיוס 100FM" }
        ];
    }

    //for loop to dynamically create elements that represent the top ten links 
    linksAndImages.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;

        const image = document.createElement('img');
        image.src = item.src;
        if (item.title != null) {
            image.title = item.title;
        } else {
            image.title = '';
        }
        if (item.alt != null) {
            image.alt = item.alt;
        } else {
            image.alt = '';
        }
        const close_btn = document.createElement('i');
        close_btn.className = "fa-solid fa-xmark"; // Use 'X' icon
        close_btn.style.position = 'absolute'; // Set position to absolute
        close_btn.style.top = '0'; // Align to top edge
        close_btn.style.right = '0'; // Align to right edge
        close_btn.style.cursor = 'pointer'; // Add cursor style
        close_btn.style.fontSize = '20px';
        close_btn.style.width = '20px';
        close_btn.style.height = '20px';
        close_btn.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('close button clicked');
            removeLinkFromArray(link);
        });


        
        link.appendChild(image);
        link.appendChild(close_btn);
        container.appendChild(link);
    });
    $draggableLink.find('a').on('dragstart', function (onDragStart) {
        if (onDragStart.target.tagName.toLowerCase() === 'a') {
            draggedElement = onDragStart.target;
        } else {
            // If the dragged element is not a link, prevent the drag operation
            onDragStart.preventDefault();
        }
    });

    $dropZone.on('dragover', function (onDragOver) {
        onDragOver.preventDefault();
        $dropZone.css('background-color', 'grey');
        setTimeout(function () {
            $dropZone.css('background-color', '');
        }, 1000);
    });

    $dropZone.on('drop', function (onDrop) {
        onDrop.preventDefault();

        // Check if the dragged element is a link
        if (draggedElement.tagName.toLowerCase() === 'a') {
            var imageUrl = '';
            var elementToDrop = draggedElement;

            var linkHref = elementToDrop.getAttribute('href');
            var linkAlt = elementToDrop.getAttribute('alt');
            imageUrl = path + convertToImageFormat(linkHref);
            console.log(imageUrl);
            imageLinkToAdd = {
                href: linkHref,
                src: imageUrl,
                alt: linkAlt,
                title: elementToDrop.title
            };

            linksAndImages.push(imageLinkToAdd);
            draggedElement = null;

            // Update the UI
            rebuildFavoritesContainer();
            
            // Save the updated array into a cookie
            setCookie("linksAndImagesCookie", JSON.stringify(linksAndImages), 30); // Cookie expires in 30 days
        }
    });

    function rebuildFavoritesContainer() {
        container.innerHTML = '';

        linksAndImages.forEach(item => {
            const link = document.createElement('a');
            link.href = item.href;

            const image = document.createElement('img');
            image.src = item.src;
            image.alt = item.alt;
            image.title = item.title;

            const close_btn = document.createElement('i');
            close_btn.className = "fa-solid fa-xmark"; // Use 'X' icon
            close_btn.style.position = 'absolute'; // Set position to absolute
            close_btn.style.top = '0'; // Align to top edge
            close_btn.style.right = '0'; // Align to right edge
            close_btn.style.cursor = 'pointer'; // Add cursor style
            close_btn.style.fontSize = '20px';
            close_btn.style.width = '20px';
            close_btn.style.height = '20px';
            close_btn.addEventListener('click', function(event) {
            // Do something when the close button is clicked
                event.preventDefault();
                removeLinkFromArray(link);
                // updateCookies();
                // container.removeChild(link); 
                rebuildFavoritesContainer();// Remove the link from the container
            });

            link.appendChild(image);
            link.appendChild(close_btn);
            container.appendChild(link);
        });
    }

    function convertToImageFormat(filename) {
        // Replace '.html' with '.png'
        return filename.replace('.html', '.png');
    }

    function setCookie(cookieName, cookieValue, expirationDays) {
        var d = new Date();
        d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    }

    function getCookie(cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieArray = decodedCookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }

    function removeLinkFromArray(link) {

        let url = link.href;
        let lastSlashIndex = url.lastIndexOf('/');
        let lastHtmlIndex = url.lastIndexOf('.html');
        let res = '';
        let indexToRemove = -1;
        if (lastSlashIndex !== -1 && lastHtmlIndex !== -1) {
            let result = url.substring(lastSlashIndex + 1, lastHtmlIndex);
            res = result;
            console.log(result); // Output: kan-gimmel

        } else {
            console.log("URL format not recognized");
        }


        let listOfDictionaries = getCookie("linksAndImagesCookie") ? JSON.parse(getCookie("linksAndImagesCookie")) : [];
        listOfDictionaries.forEach((item, index) => {
            iten = item.href
            iten = iten.replace('.html', '');
            console.log(iten);
            if (res === iten){
                indexToRemove
                console.log('it works');
                indexToRemove = index;
            }
        })

        listOfDictionaries.splice(indexToRemove, 1);
        console.log(listOfDictionaries);

        setCookie("linksAndImagesCookie", JSON.stringify(listOfDictionaries), 30);
        updateCookies();
        rebuildFavoritesContainer();


                
    }
    function updateCookies() {
        var cookieValue = getCookie("linksAndImagesCookie");
        linksAndImages = cookieValue ? JSON.parse(cookieValue) : [];
    };
    

    rebuildFavoritesContainer();


    function insertimgsndicon(){
        const all_lis  = document.getElementsByTagName("a");
        const allLinks = document.getElementsByTagName("a");
        console.log(allLinks);
        var td = []
        for (i = 0; i < all_lis.length; i++){
            var htmlcol = all_lis[i];
            console.log(htmlcol);
            if (htmlcol.href){
                var link = all_lis[i].href
                td.push(htmlcol);
            }
            
   
        }
        console.log(td);
    
        for (let i = 7; i < td.length - 2; i++) {
            var div = document.createElement("div")
            div.style.display = 'flex';
            div.style.flexDirection = 'coloumn'

            let hrefValue = td[i].getAttribute("href")
            // console.log(hrefValue)
    
            // Remove ".html" from hrefValue
            hrefValue = hrefValue.replace(".html", ".png");
            // console.log(hrefValue);
            var clsname = hrefValue.replace(".png","");
            all_lis[i].className = clsname
            
            
            let imgFile = "./images/stations/" + hrefValue;
            //create fav icon
            let heartImg = document.createElement("i");
            heartImg.className="fa-regular fa-heart";
            heartImg.setAttribute('id', 'like_icon');
            heartImg.setAttribute('aria-hidden', 'true');
            heartImg.style.fontSize = '15px';
            heartImg.style.marginTop = '5px';
            heartImg.style.textAlign = 'left';
            heartImg.style.color = 'brown'
            heartImg.style.zIndex = '2';
            heartImg.style.cursor = 'pointer';
            heartImg.addEventListener("click", (event) => {
                event.preventDefault();
                isLiked = !isLiked;
                if(isLiked){
                    heartImg.classList.replace("fa-regular", "fa-solid")
                    var linkHref = hrefValue.replace(".png", ".html");
                    // var linkAlt = elementToDrop.getAttribute('alt');
                    imageUrl = path + convertToImageFormat(linkHref);
                    // console.log(imageUrl);
                    imageLinkToAdd = {
                    href: linkHref,
                    src: imageUrl,
                    // alt: linkAlt,
                    // title: elementToDrop.title
                    };
                    linksAndImages.push(imageLinkToAdd); 
                    setCookie("linksAndImagesCookie", JSON.stringify(linksAndImages), 30);
                    rebuildFavoritesContainer();  
                } else {
                    heartImg.classList.replace("fa-solid", "fa-regular");
                    var linkHref = hrefValue.replace(".png", ".html");
                    removeLinkFromArray(linkHref);
                    setCookie("linksAndImagesCookie", JSON.stringify(linksAndImages), 30);
                    rebuildFavoritesContainer();
                }
            });
             // Adjust size as needed

        // Insert heart image before the <a> tag
            var inside = td[i].innerHTML;
            // inside.insertBefore(heartImg, td[i]);
            td[i].appendChild(heartImg);
            // td[i].parentNode.insertBefore(heartImg, td[i].nextSibling);
            // td[i].insertAdjacentElement('beforebegin', heartImg);

    
            // Create img element
            let imgElement = document.createElement("img");
            console.log(td[i]);
            td[i].appendChild(imgElement);
            // td[i].parentNode.insertBefore(imgElement, td[i]);
            // td[i].insertAdjacentElement('beforebegin', imgElement);


            imgElement.style.width = "20px";
            imgElement.style.height = "20px";
            // Set src attribute of img element
            imgElement.src = imgFile;
            imgElement.setAttribute("draggable", "false");
            // div.appendChild(imgElement);
            // div.appendChild(td[i]);

            // console.log(all_lis[i])
            all_lis[i].style.display = 'flex';
            all_lis[i].style.justifyContent = 'space-between';
            // all_lis[i].style.flexDirection = 'row-reverse';
            // all_lis[i].style.height = '27px';


            // all_lis[i].appendChild(div)
    }
}
    // insertimgsndicon();
});

