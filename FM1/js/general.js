var d = new Date();
d.setTime(d.getTime() + (14*24*60*60*1000));
var expires = "expires="+d.toUTCString();

(function() {
	for(var key in localStorage) {
		$(".body_con_left_div h3:contains('"+key+"')").next($(".bodyconmenu")).addClass(localStorage[key]);
	}
	$(".bodyconmenu.close").hide();
	$(".bodyconmenu.close").prev(".body_con_left_div h3").css("background-image","url('FM1//images/arrow.png')");
	
	for(var key in localStorage){
		if(localStorage[key] == "trueLike") {
			$("."+key).children("img").attr("src", "FM1//images/heart.png");
			$("."+key).children("img").next("br").next("span").text("הסר");
			document.cookie=key+"=trueLike; "+expires;
		} else if(localStorage[key] == "falseLike") {
			$("."+key).children("img").attr("src", "FM1//images/heart_nofill.png");
			$("."+key).children("img").next("br").next("span").text("הוסף");
			document.cookie=key+"=falseLike; "+expires;
		}
	}
	
})();

$(".body_con_left_div h3").click(function() {
	if($(this).next($(".bodyconmenu")).is(":hidden")) {
		$(this).css("background-image","url('FM1//images/arrowDown.png')");
		$(this).next($(".bodyconmenu")).slideDown();
		var status = "open";
	} else {
		$(this).css("background-image","url('FM1//images/arrow.png')");
		$(this).next($(".bodyconmenu")).slideUp();
		var status = "close";
	}
	stationName = $(this).text();
	localStorage.setItem(stationName, status);
});

function TogglePlayPause(player)
{
	if($("#" + player).hasClass("paused")) {
		$("#playPause").attr("src", "FM1//images/pause.png");
		$("#" + player).removeClass().addClass("playing");
		document.getElementById(player).play();
	} else {
		$("#playPause").attr("src", "FM1//images/play.png");
		$("#" + player).removeClass().addClass("paused");
		document.getElementById(player).pause();
	}
}

function loadPage(page, intoDiv, current){
	if(current == "none"){
		$("#menu ul li").removeClass();
	} else {
		$("#menu ul li").removeClass();
		$("#menu ul li:"+current+"-child").addClass("current");
	}
	//$(intoDiv).load(page);
}

$(".favo").click(function() {
	var favoName = $(this).parent("div").attr("class");
	if(localStorage.getItem(favoName) == "trueLike") {
		localStorage.setItem(favoName, "falseLike");
	} else {
		localStorage.setItem(favoName, "trueLike");
	}
	for(var key in localStorage){
		if(localStorage[key] == "trueLike") {
			$("."+key).children(".favo").attr("src", "FM1//images/heart.png");
			document.cookie=favoName+"=trueLike; "+expires;
			$("."+key).children("img").next("br").next("span").text("הסר");
		} else if(localStorage[key] == "falseLike") {
			$("."+key).children(".favo").attr("src", "FM1//images/heart_nofill.png");
			document.cookie=favoName+"=falseLike; "+expires;
			$("."+key).children(".favo").next("br").next("span").text("הוסף");
		}
	}
});