<?php
	include('config.php');
	include('functions.php');
	$dice = mt_rand(0,9); if ($dice < 5) {$showads = "foremedia";} else {$showads = "adsense";}
	/* if ($_SERVER['REMOTE_ADDR'] == "81.199.60.5") {$showads = "foremedia";}
	if (!function_exists('str_contains')) {
    function str_contains($haystack, $needle) {
        return $needle !== '' && mb_strpos($haystack, $needle) !== false;
    }
	}
	if (str_contains($_SERVER['REQUEST_URI'], 'dfpdeb')) {$showads = "foremedia";} */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>


<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>רדיו fm1 - תחנות רדיו בשידור חי באינטרנט</title>
<meta name="description" content="אוהבים לשמוע רדיו אונליין לייב באינטרנט? קבלו בחינם מגוון ענק של תחנות רדיו בשידור חי באינטרנט כולל רדיו ישראלי, רדיו לועזי, רדיו דתי וגם רדיו מזרחית!">
<link href="css/style.css" rel="stylesheet" type="text/css" />
<meta name="google-site-verification" content="gzPVdd7j9nbN7N8USoTHrs8u7zgYJ41QmnBQEBeIOWU" />
<script src="http://code.jquery.com/jquery-latest.js"></script>

<meta property="og:title" content="רדיו fm1 - תחנות רדיו בשידור חי באינטרנט" />
<meta property="og:description" content="אוהבים לשמוע רדיו אונליין לייב באינטרנט? קבלו בחינם מגוון ענק של תחנות רדיו בשידור חי באינטרנט כולל רדיו ישראלי, רדיו לועזי, רדיו דתי וגם רדיו מזרחית!" />
<meta property="og:image" content="http://fm1.co.il/images/logo.jpg" />
<meta property="og:url" content="http://fm1.co.il/" />
<meta property="og:site_name" content="רדיו fm1" />
<meta property="og:locale" content="he_IL" />
<meta property="og:type" content="website" />


<script type="text/javascript" async src="https://platform.foremedia.net/code/37828/analytics"></script>

</head>
<body dir="rtl">

<div class="main_div_con" style="margin-top: -14px;">


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
		
<center>

<div class="topten">
<a href="glgltz.html"><img src="images/stations/glgltz.png" alt="גלגלצ" title="גלגלצ"></a>
&nbsp;&nbsp;&nbsp;
<a href="kan-88.html"><img src="images/stations/kan-88.png" alt="כאן 88" title="כאן 88"></a>
&nbsp;&nbsp;&nbsp;
<a href="galey-israel.html"><img src="images/stations/galey-israel.png" alt="גלי ישראל" title="גלי ישראל"></a>
&nbsp;&nbsp;&nbsp;
<a href="kan-bet.html"><img src="images/stations/kan-bet.png" alt="כאן ב" title="כאן ב"></a>
&nbsp;&nbsp;&nbsp;
<a href="radio-darom.html"><img src="images/stations/radio-darom.png" alt="רדיו דרום" title="רדיו דרום"></a>
&nbsp;&nbsp;&nbsp;
<a href="kan-gimmel.html"><img src="images/stations/kan-gimmel.png" alt="כאן גימל" title="כאן גימל"></a>
&nbsp;&nbsp;&nbsp;
<a href="eco99fm.html"><img src="images/stations/eco99fm.png" alt="אקו 99FM" title="אקו 99FM"></a>
&nbsp;&nbsp;&nbsp;
<a href="100fm.html"><img src="images/stations/100fm.png" alt="רדיוס 100FM" title="רדיוס 100FM"></a>
&nbsp;&nbsp;&nbsp;
<a href="102fm.html"><img src="images/stations/102fm.png" alt="רדיו תל אביב 102FM" title="רדיו תל אביב 102FM"></a>
&nbsp;&nbsp;&nbsp;
<a href="103fm.html"><img src="images/stations/103fm.png" alt="רדיו ללא הפסקה 103FM" title="רדיו ללא הפסקה 103FM"></a>

</div>

		<? if ($showads=="foremedia") {include('foremedia-728x90.php');} else {include('adsense-728x90.php');} ?>


</center>

</br>
</br>
<!-- ?show_last_cats_index();?> -->
<!-- <show_cats_index();?> -->


    	<div class="clear"></div>
    </div>
        <div class="body_bottom_con_main_div">
              <!-- -->
        	<div style="display:none"  id="havetool"   class="body_bottom_con_left_div">
            	<div class="body_bottom_left_image_con_div">
                
                	<span style="font-size:52px">FM1</span>     <br />   לאנשים שאוהבים&nbsp;רדיו   
                   
                </div>

            </div>
            
        	<div class="body_bottom_con_right_div">
            	<h2>רדיו אונליין</h2>            	
                <p>אם אתם אוהבים לשמוע רדיו, כדאי שתכירו את אתר רדיו fm1. כאן תמצאו מגוון רחב של תחנות רדיו בשידור חי. חלק מתחנות הרדיו הן תחנות אמיתיות שמשדרות גם אונליין באינטרנט וחלק מהתחנות הן תחנות רדיו אינטרנט בלבד.</p>
                
            	<h2>תחנות רדיו בישראל ובעולם</h2>            	
                <p>כדי שיהיה לכם נוח למצוא כל תחנת רדיו שאתם אוהבים, בין אם זה רדיו ישראלי או רדיו בינלאומי, חילקנו את רשימת תחנות הרדיו לפי קטגוריות:</p>          	
                <p><span>רדיו ישראלי – </span> תחנות רדיו ממלכתיות של קול ישראל ותחנות רדיו צבאיות. את התחנות האלה ניתן לקלוט בכל הארץ.</p>          	
                <p><span>רדיו אזורי – </span>תחנות רדיו אזוריות כפופות לרשות השניה לטלויזיה ולרדיו וכל תחנה משרדת באזור מסוים. אם אתם רחוקים מהאזור של התחנה, תוכלו לשמוע כל רדיו אזורי כאן באתר.</p>
                <p><span>רדיו דתי ומזרחית – </span> תחנות רדיו לשומרי מסורת ולאוהבי מוזיקה מזרחית. בקרוב נפצל את הקטגוריות כך שיהיו יותר תחנות רדיו מכל סוג.</p>
                <p><span>רדיו באינטרנט – </span> הכוונה היא לתחנות רדיו שלא פועלות גם עם תדרים אלא משדרות רק אונליין באינטרנט. חלק מתחנות הרדיו הן בינלאומיות אז אם בא לכם לשמוע רדיו שיש בו רק שירים משנות ה-80, או רדיו שמנגן מוזיקה קלאסית, אתר רדיו fm1 נוצר במיוחד בשבילכם כדי שתוכלו לשמוע כל היום תחנות רדיו אונליין באינטרנט.</p>
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
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-41398856-1']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>



</html>