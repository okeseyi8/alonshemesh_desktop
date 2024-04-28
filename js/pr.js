// **********************
// * Cue.AD				*
// * www.cue-ad.com		*
// **********************

function getXHR() { 
  if (window.XMLHttpRequest) {
    // Chrome, Firefox, IE7+, Opera, Safari
    return new XMLHttpRequest(); 
  } 
  // IE6
  try { 
    return new ActiveXObject('MSXML2.XMLHTTP.6.0');
  } catch (e) { 
    try { 
      // The fallback.
      return new ActiveXObject('MSXML2.XMLHTTP.3.0');
    } catch (e) { 
      //alert('This browser is not AJAX enabled.'); 
      return null;
    } 
  } 
} 

function parseXML(xmlstr) {
    if (window.DOMParser) {
        var parser = new DOMParser();
        return parser.parseFromString(xmlstr, "text/xml");
    }
    else if (window.ActiveXObject) {
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(xmlhttp.responseText);
        return xmlDoc;
    }
    else {
        return null;
    }
}

function playStation() {
	if (document.getElementById('Player2') == null) {
		if ($.browser.msie || !!navigator.userAgent.match(/Trident\/7\./)) {
			$("#Player").remove(); 
			$("#wmplayer").html(" ");
			$("#wmplayer").html("<object id='Player2' width='250' height='213' CLASSID='CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6'> <param name='URL' value='" + stationSrc + "'> <param name='uiMode' value='mini'> <param name='mute' value='false'> <param name='ShowControls' value='1'> <param name='ShowStatusBar' value='1'> <param name='ShowDisplay' value='1'> <param name='AutoStart' value='true'> <embed id='Player2' type='application/x-mplayer2' pluginspage='http://www.microsoft.com/Windows/MediaPlayer/' src='' name='Player2' width='250' height='213' AutoStart='true' showcontrols='1' showstatusbar='1' showdisplay='1'></embed></object>");
		} 
		else {
			var elem = document.getElementsByTagName("EMBED")[0],
			copy = elem.cloneNode();
			copy.src = stationSrc;
			elem.parentNode.replaceChild(copy, elem);
		}
	}
}