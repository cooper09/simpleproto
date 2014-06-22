
<?php

include("config.php");

$table_id = "Ads";
$query = "SELECT * FROM " . $table_id ;

    $result = mysql_query($query, $dbh);
    $num_rows = mysql_num_rows($result);

    if (!$result) {
        $flashString = 'queryError=file not found';
    }else{
        if($num_rows == 0){
            $flashString = 'queryError=file not found';
        }else{
            $rs = array();
            while ($rs[] = mysql_fetch_assoc($result)) {
           // $flashString .= 'Available Ad: ' . $row['file_location'].'; ';
            }
        }
    }

    // get the callback function name
    $callback = '';
    if (isset($_GET['callback']))
    {
        $callback = filter_var($_GET['callback'], FILTER_SANITIZE_STRING);
    }
     
    $array = array('response' => $rs );

    // output this array json encoded.. the callback function being the padding (a function available in the web page)
    //echo $callback . '('.json_encode($array).');';

	
	?>