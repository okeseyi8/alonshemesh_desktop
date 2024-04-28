<?php
class Security{
	
	public function post($p){
		$r = mysql_real_escape_string(htmlspecialchars($_POST[$p]));
		return $r;
	}
	
	public function get($g){
		$r = mysql_real_escape_string(htmlentities($_GET[$g]));
		return $r;
	}

	public function query($q){
		$r = mysql_query($q) or die("Query Error: " . mysql_error());
		return $r;
	}


}

$Sec = new Security();
?>