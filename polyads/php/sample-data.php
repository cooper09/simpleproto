<?php
/***
* An extremely simple sample of a callback handler
***/

$response = array();

$dbh=mysql_connect ("localhost", "sonyainc_admin","wehrmacht09") or die('Cannot connect to the database because: ' . mysql_error());
mysql_select_db ("sonyainc_polyads");

$table_id = "Ads";
	$query = "SELECT * FROM " . $table_id ;

	$result = mysql_query($query, $dbh);
	$num_rows = mysql_num_rows($result);

	if (!$result) {
		$response = array('param' => 'file not found');
	}else{
		while ($row = mysql_fetch_assoc($result)) {
			$response =  array('ad_id' => $row['id'], 'param' => $row['file_location']);
		}
	}

$id = $_GET["param1"];

$dooda = $row['file_location'];
$link = array('param' => "$dooda"); 

/*	$response[] = array('title' => "Sample item - $i", 'description' => "Description - $i");
} */

//$response = array('adid' => "$id", 'ref' => "$link");

//$response = array('param' => "$id");


echo $_GET['callback'] . '(' . json_encode($response) . ');';