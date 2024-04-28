<?php
function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
if(isMobile())
    include "FM1/index.php";
else {
include('config.php');
include('functions.php');
$current_url = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://{$_SERVER[HTTP_HOST]}{$_SERVER[REQUEST_URI]}";
@setcookie("page_set", $current_url, time()+60*60*24*30);
if(preg_match('/inner\.php/',$_SERVER['REQUEST_URI'])){
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: '.$_GET["name"].'.html');
}
// DB Get ROW
	$id = $_GET['name'];
	$a = mysql_query("select * from play where name = '$id'");
	if (mysql_num_rows($a) == 0){
		//echo 'Blat';
	}
	else{
		$row = mysql_fetch_array($a);
		$name = $row['name'];
		$asx = $row['asx'];
		$flash = $row['flash'];
		$text = $row['text'];
		$image2 = $row['image2'];
		$image = $row['image'];
		$pid = $row['pid'];
		$title = $row['title'];
		$gclid = $row['gclid'];
		}
// End DB Get ROW
$dice = mt_rand(0,9); if ($dice < 5) {$showads = "foremedia";} else {$showads = "adsense";}


?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?=$title?> » מנגן עכשיו • רדיו fm1 🎵</title>
<meta name="description" content="אוהבים לשמוע <?=$title?> אונליין לייב באינטרנט? אתר רדיו fm1 מביא לכם בחינם את כל תחנות הרדיו האהובות כולל <?=$title?> בשידור חי באינטרנט!">
<meta property="og:title" content="<?=$title?> » מנגן עכשיו • רדיו fm1 🎵" />
<meta property="og:description" content="אוהבים לשמוע <?=$title?> אונליין לייב באינטרנט? אתר רדיו fm1 מביא לכם בחינם את כל תחנות הרדיו האהובות כולל <?=$title?> בשידור חי באינטרנט!" />
<meta property="og:image" content="<?=$image?>" />
<meta property="og:url" content="http://fm1.co.il/<?=$name;?>.html" />
<meta property="og:site_name" content="רדיו fm1" />
<meta property="og:locale" content="he_IL" />
<meta property="og:type" content="article" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" async src="https://platform.foremedia.net/code/37828/analytics"></script>

<script type="text/javascript" src="js/sdmenu.js"></script>
<script>
	(function () {
		if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
			window.location.replace("http://fm1.co.il/FM1/?name=<?=$name;?>");
		} else {
			return true;
		}
	})();
</script>



</head>
<body dir="rtl">

<div class="main_div_con" style="margin-top: 0px;">

	<!--Header-Part-->
	<div class="header_bg">	
    	<div style="margin-top:30px;">
            <div class="header_cont_left_div">
            <table cellpadding="5" cellspacing="0" border="0" style="float:right">
                	<tr>
                    	<td> <div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#appId=113814722048122&amp;xfbml=1"></script><fb:like href="http://fm1.co.il" send="false" layout="box_count" show_faces="false" action="like" font=""></fb:like></td>
                        
                    </tr>
                </table>
                
                <div class="clear"></div>
            </div>
            <div class="header_cont_middle_div">
           	  <div align="right" style="padding:15px 0px;">
              <span class="header_text_1"><h1>רדיו fm1 - תחנות רדיו בשידור חי באינטרנט</h1></span><br />
              </div>
              
			<div align="right" class="navmenu">
				<ul>
					<li><a href="http://fm1.co.il/contact.php">צור קשר</a></li>
					<li><a href="http://fm1.co.il">רדיו</a></li>
				</ul>
			</div>
                        
            </div>
            <div class="header_cont_right_div"><a href="/"><img border="0" alt="רדיו fm1" title="רדיו fm1" src="images/logo.jpg" width="131" height="79" /></a></div>
            <div class="clear"></div>
        </div>    
    </div>    
	<!--Body-Part-->
    <div>
		<div class="body_con_main_div">
        <div class="inner_body_con_left_div">
		
		<div style="position:relative;left:558px;top:-66px">
		
		<div class="topten"><a href="glgltz.html"><img src="images/stations/glgltz.png" alt="גלגלצ" title="גלגלצ"></a><a href="kan-88.html"><img src="images/stations/kan-88.png" alt="כאן 88" title="כאן 88"></a><a href="galey-israel.html"><img src="images/stations/galey-israel.png" alt="גלי ישראל" title="גלי ישראל"></a><a href="kan-bet.html"><img src="images/stations/kan-bet.png" alt="כאן ב" title="כאן ב"></a><a href="radio-darom.html"><img src="images/stations/radio-darom.png" alt="רדיו דרום" title="רדיו דרום"></a><a href="kan-gimmel.html"><img src="images/stations/kan-gimmel.png" alt="כאן גימל" title="כאן גימל"></a><a href="eco99fm.html"><img src="images/stations/eco99fm.png" alt="אקו 99FM" title="אקו 99FM"></a><a href="100fm.html"><img src="images/stations/100fm.png" alt="רדיוס 100FM" title="רדיוס 100FM"></a><a href="102fm.html"><img src="images/stations/102fm.png" alt="רדיו תל אביב 102FM" title="רדיו תל אביב 102FM"></a><a href="103fm.html"><img src="images/stations/103fm.png" alt="רדיו ללא הפסקה 103FM" title="רדיו ללא הפסקה 103FM"></a></div>
		
		
		<? if ($showads=="foremedia") {include('foremedia-728x90.php');} else {include('adsense-728x90.php');} ?>
		
		
		</div>
	
		
		<? if ($showads=="foremedia") {include('foremedia-160x600.php');} else {include('adsense-160x600.php');} ?>


</div>
        <div class="inner_body_con_middle_div">	
        
        <h1 style="float:right">מנגן עכשיו: <?=$title?></h1>
        	<div style="width:505px; margin:auto; border-bottom:#e4e4e4 1px solid; padding-bottom:20px;">
                <div style="width:250px; float:left; padding-top:8px; clear:both">
                <?
                	$isOldIE = false;//!preg_match('/(?i)msie [1-8]/',$_SERVER['HTTP_USER_AGENT']);
                	if($isOldIE){
                		include("phpAsx.php");
						echo '<video src="'.$advApi["mediaUrl"].'" width="250" height="213"></video>';
                	}else{
                		echo "<video></video>";
                	}
                ?>
                <div align="center" onload="changePlayer()" id="innerData" style="margin-right:8px;">
                	<noscript>
<?
if(!empty($asx)){
	echo<<<player
<OBJECT ID='Player' width='250' height='213' CLASSID='CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6'>
	<PARAM name='URL' value='{$asx}'>
	<PARAM name='uiMode' value='mini'>
	<PARAM name='mute' value='false'>
	<PARAM name='ShowControls' value='1'>
	<PARAM name='ShowStatusBar' value='1'>
	<PARAM name='ShowDisplay' value='1'>
	<PARAM name='AutoStart' value='true'>
	<EMBED type='application/x-mplayer2'
	pluginspage = 'http://www.microsoft.com/Windows/MediaPlayer/'
	SRC='{$asx}'
	name='Player'
	width=250
	height=213
	AutoStart='true'
	showcontrols='1' showstatusbar='1' showdisplay='1'>
	</EMBED>
</OBJECT>
player;
}else{
	echo $flash;
}
?>
                	</noscript>
				</div>
            <br />
        
                	<div align="center">
					<div id="acum"><p style="padding:0;color: #3E466B;display:inline;font-size: 14px;vertical-align: 7px;">האתר פועל ברשיון</p><a href="http://www.acum.org.il/" target="_blank" rel="nofollow"><img src="images/acum.png"></a></div>
					</div>

                	              
              </div>
				<div style="width:235px; float:right;">
					<div align="right" style="width:240px; height:120px; background-color:#f1f1f1; text-align:center; margin-top:7px; padding:5px 0 5px 0;"><img src="<?=$image?>"></div>
                    <div align="left" style="padding-bottom:8px;">
					<table cellpadding="5" cellspacing="0" border="0" style="float:left; margin-left:0px;">
						<tr>
							<td align="center">
								<fb:like href="" send="false" width="200" height="60" show_faces="true"></fb:like>
							</td>
						</tr>
					</table>
                    </div>
                  <div style="padding-bottom:8px;">
                  </div>
                 
              </div>
                <div class="clear"></div>
            </div>
            <div id="stationtext">
            <br/>
			
			<?
				if($advApi){
					echo '<iframe src="'.$advApi["bannerHref"].'" width="300" height="250" style="margin: 10px;" frameborder="0" scrolling="no"></iframe>';
				}
			?>
			
			
			<h2>אודות <?=$title?></h2>
			<?=$text?>

			</div>
        </div>
        <div class="inner_body_con_right_div">
        	 <div style="float: left" id="my_menu" class="sdmenu">
		<?show_last_cats_side();?>
         <?show_cats_side();?>
         
            </div>
			</div>
    	<div class="clear"></div>
    </div>
    </div>
    
	<!--Footer-Part-->
	<div class="footer_main_div">
    	<div class="footermenu">
        	<ul>
            	<li><a href="http://fm1.co.il">רדיו fm1</a></li>
            </ul>
             <br />
         
           
            <div class="clear"></div>
           
        </div> 
<div id="acum" style="margin-top: -45px;float: left;"><p style="padding:0;color: #3E466B;">האתר פועל ברשיון</p><a href="http://www.acum.org.il/" target="_blank" rel="nofollow"><img src="images/acum.png"></a></div>		
    </div>
<p>&copy; כל הזכויות שמורות לאתר fm1.co.il רדיו fm1 - אתר תחנות רדיו בשידור חי באינטרנט כולל תחנות רדיו בישראל בשידור חי</p>
</div>
</body>
<script type="text/javascript">
	(function(){
		var test_video= document.createElement("video");
		var mediasupport=(test_video.play) ? true : false;
		var videoElement = document.getElementsByTagName('video')[0];
		var interval;
		var hours = 12; // Reset when storage is more than 24hours
		var now = new Date().getTime();
		var setupTime = localStorage.getItem('setupTime');

		if (setupTime == null) {
		    localStorage.setItem('setupTime', now)
		} else {
		    if(now-setupTime > hours*60*60*1000) {
		        localStorage.clear();
		        localStorage.setItem('setupTime', now);
		    }
		}

		if(mediasupport && !localStorage.getItem("play") && false){
			videoElement.play();
			var time = 0;
			interval = setInterval(function(){
				if(time == 100){
					clearInterval(interval);
					videoElement.style.display = "none";
					localStorage.setItem('play', 1);
					getStation("");
				}

				if(videoElement.ended){
					clearInterval(interval);
					videoElement.style.display = "none";
					localStorage.setItem('play', 1);
					getStation("firstime");
				}
				time++;
			},300);
		}else{
			videoElement.style.display = "none";
			getStation("");
		}
	})();

function getStation(string){
	var xmlhttp;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
		    document.getElementById("innerData").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","getFm.php?name=<?=$_GET['name']?>&f="+string,true);
	xmlhttp.send();
}

</script>
<script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-41398856-1']);
	_gaq.push(['_trackPageview']);
	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
</script>

<script language="JavaScript" type="text/JavaScript"> 
	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
	var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
	
	var isApp = "<?php echo $_COOKIE["click_app"]; ?>";
	/*if (isChrome && isApp!="1")
	{
		document.getElementById('addToChrome').style.display = '';
		var timePop = Math.floor((Math.random() * 30000));
		setTimeout("document.getElementById('note').style.display = '';",timePop);
	}*/
</script> 



</html>
<?
}
?>