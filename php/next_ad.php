
<?php
    // get the callback function name
    $callback = '';
    if (isset($_GET['callback']))
    {
        $callback = filter_var($_GET['callback'], FILTER_SANITIZE_STRING);
    }
     
    // make an array with some random values.. so you would see that the results are fetched each time you call this script
    $array = array(
                    
                    'current_ad' => "http://sonyainc.net/polyads/ads/prototype_example_2.jpg"
                     
    );
    // output this array json encoded.. the callback function being the padding (a function available in the web page)
    echo $callback . '('.json_encode($array).');';
	
	
	?>