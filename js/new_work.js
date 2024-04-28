document.addEventListener("DOMContentLoaded", function () {
    var $draggableLink = $('.first_G, .second_g');
    var $dropZone = $('#drop-zone');
    const container = document.getElementById('drop-zone');
    var draggedElement;
    var path = 'images/stations/';
    var isLiked = false;
    var fav_cls = [];

    // Check if the cookie exists
    var cookieValue = getCookie("linksAndImagesCookie");
    var linksAndImages = cookieValue ? JSON.parse(cookieValue) : [];

    // Fill linksAndImages with top ten links if it's empty
    if (linksAndImages.length === 0) {
        linksAndImages = [
        ];
    }
    
    // Fixing the code to add a close button 'X' icon to the top edge of the image and handle its click event
    linksAndImages.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.style.width = '20px';
        link.style.height = '20px';

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
            removeLinkFromArray(link);
            console.log('close button clicked');
            removeLinkFromArray(link);
        });
        link.appendChild(image);
        link.appendChild(close_btn); // Append close button icon to the link
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

        var elementToDrop = draggedElement;

        var l = elementToDrop.getAttribute('href');
        l = l.replace('.html', '');
        if (fav_cls.includes(l)){
            return
        }

        // Check if the dragged element is a link
        if (draggedElement.tagName.toLowerCase() === 'a') {
            var imageUrl = '';
            var elementToDrop = draggedElement;

            var linkHref = elementToDrop.getAttribute('href');
            var linkAlt = elementToDrop.getAttribute('alt');
            imageUrl = path + convertToImageFormat(linkHref);
            // console.log(imageUrl);
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
            update_fav_btn();
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
            image.style.zIndex = '1';

            const close_btn = document.createElement('i');
            close_btn.className = "fa-solid fa-xmark"; // Use 'X' icon
            close_btn.style.position = 'absolute'; // Set position to absolute
            close_btn.style.top = '0'; // Align to top edge
            close_btn.style.right = '0'; // Align to right edge
            close_btn.style.cursor = 'pointer'; // Add cursor style
            close_btn.style.fontSize = '20px';
            close_btn.style.width = '20px';
            close_btn.style.height = '20px';
            close_btn.style.zIndex = '2';
            close_btn.addEventListener('click', function(event) {
                event.preventDefault();
                console.log('close button clicked');
                removeLinkFromArray(link);
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


    function insertimgsndicon(){
        const all_lis  = document.getElementsByTagName("li");
        // const allLinks = document.getElementsByTagName("a");
        var td = []
        for (i = 0; i < all_lis.length; i++){
            var htmlcol = all_lis[i].getElementsByTagName('a');
            var link = htmlcol[0];
            td.push(link);
   
        }
    
        for (let i = 4; i < td.length - 1; i++) {
            var div = document.createElement("div")
            div.style.display = 'flex';
            div.style.marginTop = "10px"
            div.style.marginBottom = "5px"
            // div.style.flexDirection = 'column'

            let hrefValue = td[i].getAttribute("href")
            console.log(hrefValue)
    
            // Remove ".html" from hrefValue
            hrefValue = hrefValue.replace(".html", ".png");
            console.log(hrefValue);
            var clsname = hrefValue.replace(".png","");
            all_lis[i].className = clsname
            
            
            let imgFile = "./images/stations/" + hrefValue;
            //create fav icon
            let heartImg = document.createElement("i");
            heartImg.className="fa-regular fa-heart";
            heartImg.setAttribute('id', 'like_icon');
            heartImg.setAttribute('aria-hidden', 'true');
            heartImg.style.fontSize = '15px';
            heartImg.style.marginTop = '12px';
            heartImg.style.textAlign = 'left';
            heartImg.style.color = 'brown'
            heartImg.style.zIndex = '2';
            heartImg.style.cursor = 'pointer';
            heartImg.addEventListener("click", () => {
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
                    rebuildFavoritesContainer();  
                } else {
                    heartImg.classList.replace("fa-solid", "fa-regular");
                    var linkHref = hrefValue.replace(".png", ".html");
                    removeLinkFromArray(linkHref);
                    rebuildFavoritesContainer();
                }
            });
             // Adjust size as needed

        // Insert heart image before the <a> tag
            td[i].parentNode.insertBefore(heartImg, td[i].nextSibling);
    
            // Create img element
            let imgElement = document.createElement("img");
            td[i].parentNode.insertBefore(imgElement, td[i]);

            imgElement.style.width = "20px";
            imgElement.style.height = "20px";
            // Set src attribute of img element
            imgElement.src = imgFile;
            imgElement.setAttribute("draggable", "false");
            div.appendChild(imgElement);
            div.appendChild(td[i]);

            
            all_lis[i].style.display = 'flex';
            all_lis[i].style.justifyContent = 'space-between';
            all_lis[i].style.flexDirection = 'row-reverse';
            all_lis[i].style.height = '27px';


            all_lis[i].appendChild(div)
    }
}
    insertimgsndicon();

    function update_fav_btn(cookieName){
        var fav_cookie = getCookie("linksAndImagesCookie")
        var all_lis = document.getElementsByTagName("li");
        var data = fav_cookie

        const hrefRegex = /"href":"([^"]+)"/g;
        const hrefMatches = [];
        let match;
        while ((match = hrefRegex.exec(data)) !== null) {
            hrefMatches.push(match[1]);
        }
        // console.log(hrefMatches)
        cls =[]
        for (i = 0; i < hrefMatches.length; i++){
            cls.push(hrefMatches[i].replace(".html", ""));
            fav_cls.push(hrefMatches[i].replace(".html", ""));  
        }

        cls.forEach(function(item){
            for (i = 0; i < all_lis.length; i++){
                if (all_lis[i].className == item){
                    var heartImg = all_lis[i].getElementsByTagName("i")[0];
                    heartImg.classList.replace("fa-regular", "fa-solid")
                }
            }
        })

    }

    var test = getCookie("linksAndImagesCookie")
    
    update_fav_btn();

    function removeLinkFromArray(link) {

        let listOfDictionaries = getCookie("linksAndImagesCookie") ? JSON.parse(getCookie("linksAndImagesCookie")) : [];

        // Function to remove dictionary with id equal to 2
        const hrefToRemove = link;
        let indexToRemove = -1;
        for (let i = 0; i < listOfDictionaries.length; i++) {
            if (listOfDictionaries[i].href === hrefToRemove) {
                indexToRemove = i;
                break;
            }
        }

        if (indexToRemove !== -1) {
            listOfDictionaries.splice(indexToRemove, 1);
            // rebuildFavoritesContainer();
        }
        setCookie("linksAndImagesCookie", JSON.stringify(listOfDictionaries), 30)
        let j = getCookie('linksAndImagesCookie');
        console.log(j);
        console.log('here');
        console.log(listOfDictionaries);
        rebuildFavoritesContainer();
    }


});