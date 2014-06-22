
<?php
include("config.php");


$publisher = $_GET[publisher];
$campaign = $_GET[campaign];
$location = $_GET[location];
$adNo = $_GET[adNo];
$clickdate = $_GET[clickdate];

//echo "clickdate: ".$clickdate."</br>";

$table_id = "Ads";

$query = "INSERT INTO Ads (publisher, campaign, location, adno, clickdate ) VALUES('$publisher','$campaign','$location','$adNo','$clickdate')";

$result = mysql_query($query, $dbh);

//echo "result: ".$result."</br>";

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
