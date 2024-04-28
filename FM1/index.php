<?php
@session_start();
ob_start();
ob_clean();
	/*
	#	Author: Yogev Lahyani.
	#	Mail: yogevlahyani@gmail.com
	*/
	
	include("FM1/Source/Security.php");
	include('config.php');
	include('functions.php');

	$dice = mt_rand(0,9); if ($dice < 5) {$showads = "foremedia";} else {$showads = "adsense";}
	
	
?>

<!DOCTYPE html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="author" content="Yogev Lahyani" /> 
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, user-scalable=yes">
	<title>רדיו fm1 - תחנות רדיו בשידור חי באינטרנט</title>
	<meta name="description" content="אוהבים לשמוע רדיו אונליין לייב באינטרנט? קבלו בחינם מגוון ענק של תחנות רדיו בשידור חי באינטרנט כולל רדיו ישראלי, רדיו לועזי, רדיו דתי וגם רדיו מזרחית!">
    <meta name="google-site-verification" content="gzPVdd7j9nbN7N8USoTHrs8u7zgYJ41QmnBQEBeIOWU" />
	<base href="/">
	<link rel="stylesheet" href="slider.css" type="text/css" />
	<link rel="stylesheet" href="style.css" type="text/css" />
	<meta property="og:title" content="רדיו fm1 - תחנות רדיו בשידור חי באינטרנט" />
	<meta property="og:description" content="אוהבים לשמוע רדיו אונליין לייב באינטרנט? קבלו בחינם מגוון ענק של תחנות רדיו בשידור חי באינטרנט כולל רדיו ישראלי, רדיו לועזי, רדיו דתי וגם רדיו מזרחית!" />
	<meta property="og:image" content="http://fm1.co.il/images/logo.jpg" />
	<meta property="og:url" content="http://fm1.co.il/" />
	<meta property="og:site_name" content="רדיו fm1" />
	<meta property="og:locale" content="he_IL" />
	<meta property="og:type" content="website" />
	<script type="text/javascript" async src="https://platform.foremedia.net/code/37828/analytics"></script>
	<script src="js/jquery.js"></script>
	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="http://code.jquery.com/ui/jquery-ui-git.js"></script>
	<script type="text/javascript" src="js/slider.js"></script>
	<script type="text/javascript">
	(function () {
		if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
			return true;
		} else {
			window.location.replace("http://fm1.co.il/index.php");
		}
	})();
	</script>
</head>
<body>
	<div id="wrapper">
		<header id="topNav">
			<div id="logo" class="right">
				<h1>
					<a href="http://fm1.co.il" onclick="location.href='http://fm1.co.il'">
						<img alt="רדיו fm1" title="רדיו fm1" src="images/logo.jpg" />
						<span>fm1</span>
					</a>
				</h1>
			</div>
			<nav id="menu" class="right">
				<ul>
					<li><a href="http://fm1.co.il" onclick="location.href='http://fm1.co.il'">כל התחנות</a></li>
					<li><a href="index.php?page=favo" onclick="location.href='index.php?page=favo'">מועדפים</a></li>
				</ul>
			</nav>
			<div id="infoHeader" class="left" onclick="loadPage('', '', 'none');">
					<a href="index.php?page=info"><img src="images/info_header.png" /></a>
			</div>
		</header>
			<div id="container">
				<?php
					if($Sec->get('name')) {
						echo '<script>
									$("#menu ul li").removeClass("current");
								</script>';
						echo '<div class="innerStation">';
							show_inner_station();
						echo '</div>';
					} elseif($Sec->get('page') == "info") {
						echo '<script>
						(function() {
							$("#menu ul li").removeClass("current");
						})();
						</script>';
						include "Source/info.php";
					} elseif($Sec->get('page') == "favo") {
						echo '<script>
							$("#menu ul li").removeClass("current");
							$("#menu ul li:last-child").addClass("current");
						</script>';
						include "FM1/Source/showMobile.php";
					} else {
						echo '<div class="stationsWrap">';
							show_cats_mobile();
						echo '</div>';
					}
				?>
			</div>
			<script type="text/javascript" src="js/general.js"></script>
	</div>
	
	<!--div id="ad" class="bottomFixed"-->
	
	<center>
	
	<? if ($showads=="foremedia") {include('foremedia-336x280.php');} else {include('adsense-336x280.php');} ?>
	
	
	</center>



	</div>
</body>
</html>