
<?php
    // get the callback function name
    $callback = '';
    if (isset($_GET['callback']))
    {
        $callback = filter_var($_GET['callback'], FILTER_SANITIZE_STRING);
    }
     
     $array = array('response' => "OK" );

    // output this array json encoded.. the callback function being the padding (a function available in the web page)
    echo $callback . '('.json_encode($array).');';

	
	?>