 function callTheJsonp()
            {

            	console.log("callJsonP...");
                // the url of the script where we send the asynchronous call

			var url = "http://sonyainc.net/polyads/php/current_ad.php?callback=parseRequest";
				
                // create a new script element
                var script = document.createElement('script');
                // set the src attribute to that url
                script.setAttribute('src', url);
                script.setAttribute('type','text/javascript' );
                // insert the script in out page
                document.getElementsByTagName('head')[0].appendChild(script);
            }
 
            // this function should parse responses.. you can do anything you need..
            // you can make it general so it would parse all the responses the page receives based on a response field
            function parseRequest(response)
            {	
				_resp = response;
			
                try // try to output this to the javascript console
                {
         
					var parsedData = JSON.parse(response);
					
                }

              catch(an_exception) // alert for the users that don't have a javascript console
                {
					
					var current_ad = _resp.current_ad;
					var ad = document.getElementById("ad1");
				
					var adImg= document.createElement('img');
					adImg.setAttribute('src', current_ad );
					ad.appendChild(adImg);

                }//end exception catch
            }// end parseRequest
			

			function storeData( publisher, campaign, location, adno ) {
				var url = "http://sonyainc.net/polyads/php/insert_data.php?publisher="+publisher+"&campaign="+campaign+"&location="+ location+"&adno="+adno;

				 // create a new script element
                var script = document.createElement('script');
                // set the src attribute to that url
                script.setAttribute('src', url);
                // insert the script in out page
                document.getElementsByTagName('head')[0].appendChild(script);

               
			}

			 function parseResponse (resp) {

			 	_resp = resp;

			 	try {
					var spanText= document.getElementById("results");
					
					var parsedData = JSON.parse(response);

			 	}
			 		catch(an_exception) // alert for the users that don't have a javascript console
                {
					alert(" data_Base response: "+ _resp.response );

                }//end exception catch
			 }