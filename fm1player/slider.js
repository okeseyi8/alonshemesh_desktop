$(document).ready(function() {
	
	if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
	document.getElementById("player").pause();
	$("#volume").hide();
	
	function simulateClick(control)
	{
		if (document.all)
		{
			control.click();
		}
		else
		{
			var evObj = document.createEvent('MouseEvents');
			evObj.initMouseEvent('click', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
			control.dispatchEvent(evObj);
		}
	}
		simulateClick(document.getElementById('playPause'));	
		$(".controls").css("maxWidth", "128px");
		$(".controls").css("width", "100%");
		$(".controls").css("marginTop", "3px");
		
	} else {
		document.getElementById("player").play();
	}
	
	document.getElementById("player").play();
	
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

function TogglePlayPause(player)
{
	if($("#" + player).hasClass("paused")) {
		$("#playPause").attr("src", "http://fm1.co.il/fm1player/images/radio-pause.png");
		$("#" + player).removeClass().addClass("playing");
		document.getElementById(player).play();
	} else {
		$("#playPause").attr("src", "http://fm1.co.il/fm1player/images/radio-play.png");
		$("#" + player).removeClass().addClass("paused");
		document.getElementById(player).pause();
	}
}

