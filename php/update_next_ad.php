
<?php
    // get the callback function name
	
	 $nextAd = $_GET["nextAd"];
	
    $callback = '';
    if (isset($_GET['callback']))
    {
        $callback = filter_var($_GET['callback'], FILTER_SANITIZE_STRING);
    }
     
    // make an array with some random values.. so you would see that the results are fetched each time you call this script
    $array = array(
                    
                    //'current_ad' => $nextAd
					'current_ad' => "TEST"
                     
    );
    // output this array json encoded.. the callback function being the padding (a function available in the web page)
    echo $callback . '('.json_encode($array).');';
	
	
	?>