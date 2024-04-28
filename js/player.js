// new player
const playButtons = document.querySelectorAll(".main_play");
let play_icons = document.querySelectorAll(".play-icon");
const main_speaker = document.getElementById("main_speaker")
const speaker_icon = document.getElementById("speaker-icon");
const like_button = document.getElementById("like_button");
const audio = document.getElementById("audio");
const like_icon = document.getElementById("like_icon");
let isPlaying = false;
let isMute = false;
let isLiked = false;
let seekBar = document.getElementById("seekBar");
let lastVolume = 1;
var fav_list = getCookie('linksAndImagesCookie')
console.log(fav_list);
seekBar.addEventListener("input", () =>{

  const volume = parseFloat(seekBar.value) / 100;
  audio.volume = volume;
  if (volume === 0){
    isMute = true
    speaker_icon.classList.replace("fa-volume-high", "fa-volume-mute");

  }else{
    isMute = false;
    lastVolume = volume;
    console.log(lastVolume);
    speaker_icon.classList.replace("fa-volume-mute", "fa-volume-high");
  }
  
 });
speaker_icon.addEventListener("click", () =>{
  isMute = !isMute;
  
  console.log(isMute);
  if(isMute){
    speaker_icon.classList.replace("fa-volume-high", "fa-volume-mute");
    seekBar.value = 0
    audio.volume = 0;


  }else if(!isMute){
    seekBar.value = lastVolume * 100;
    audio.volume = lastVolume;
    speaker_icon.classList.replace("fa-volume-mute", "fa-volume-high");

  }

  

})
function playFunc(){
  playButtons.forEach(function(button) {
    button.addEventListener("click", () => {
      isPlaying = !isPlaying;
      
      play_icons.forEach(function(play_icon){
        if (isPlaying) {
          play_icon.classList.replace("fa-play-circle", "fa-circle-pause");
          audio.play();
        } else {
          if (audio) {
            audio.pause(); // Pause the audio
          }
          play_icon.classList.replace("fa-circle-pause", "fa-play-circle");
        }
      });
    });
  });
}

window.onload = function(){
  seekBar.value = 100;
  playFunc();
  like_button.addEventListener("click", () => {
    isLiked = !isLiked;
    if(isLiked){
      like_icon.classList.replace("fa-regular", "fa-solid")      
    } else {
      like_icon.classList.replace("fa-solid", "fa-regular")
    }
  });
  
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


function is_fav(){
  var fav_list = getCookie('linksAndImagesCookie')
  var img = document.getElementById("image_logo");
  console.log(img.src);
}

is_fav();





