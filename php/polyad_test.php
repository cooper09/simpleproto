
<?php
    // get the callback function name
    $callback = '';
    if (isset($_GET['callback']))
    {
        $callback = filter_var($_GET['callback'], FILTER_SANITIZE_STRING);
    }
     
    // make an array with some random values.. so you would see that the results are fetched each time you call this script
    $array = array(
                    'ad_id' => rand(1,13),
                    'name' => "test ad",
                    'publisher' => "Sonya Enterprises"
                     
    );
    // output this array json encoded.. the callback function being the padding (a function available in the web page)
    echo $callback . '('.json_encode($array).');';
	
	
	?>