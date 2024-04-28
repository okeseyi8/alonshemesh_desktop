$(document).ready(function() {
	
	/*if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		//Mobile
	} else {
		//No Mobile
	}*/
	
  $("#volume").slider({
    min: 0,
    max: 100,
    value: 100,
		range: "min",
		animate: false,
    slide: function(event, ui) {
      setVolume((ui.value) / 100);
    }
  });

  var myMedia = document.createElement('audio');
  $('.musicPlayer').append(myMedia);
  myMedia.id = "player";
	playAudio('audio/ViewSource', 0);
});

function playAudio(fileName, myVolume) {
  var mediaExt = (myMedia.canPlayType('audio/mp3')) ? '.mp3' 
  	: (myMedia.canPlayType('audio/ogg')) ? '.ogg' 
  	: '';
  if (mediaExt) {
    myMedia.src = fileName + mediaExt;
    myMedia.setAttribute('loop', 'loop');
    setVolume(myVolume);
    myMedia.play();
  }
}

function setVolume(myVolume) {
    var myMedia = document.getElementById('player');
    myMedia.volume = myVolume;
}