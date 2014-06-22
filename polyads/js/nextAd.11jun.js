var _whichAd;

 function nextAd( whichAd )
            {

            	//alert("where are we: " + whichAd  );

                // the url of the script where we send the asynchronous call

			var url = "http://sonyainc.net/polyads/php/next_ad.php?callback=parseNextAd";
			
			_whichAd = whichAd;



                // create a new script element
                var script = document.createElement('script');
                // set the src attribute to that url
                script.setAttribute('src', url);
                // insert the script in out page
                document.getElementsByTagName('head')[0].appendChild(script);
            }
 
            // this function should parse responses.. you can do anything you need..
            // you can make it general so it would parse all the responses the page receives based on a response field
           
            function parseNextAd(response)
            {	
				_resp = response;
			
                try // try to output this to the javascript console
                {
                console.log("response: " + _resp);

                	var adArr = ['http://sonyainc.net/polyads/ads/prototype_example_1.jpg','http://sonyainc.net/polyads/ads/prototype_example_2.jpg']
					//var spanText = document.createElement("span");
					var spanText= document.getElementById("results");
					
					//spanText.setAttribute("class", "tweetText");
					var parsedData = JSON.parse(response);
					
                }

              catch(an_exception) // alert for the users that don't have a javascript console
                {

					//alert(" next ad: " + _resp.current_ad );

					//alert(" next ad: " + _whichAd );

					//var next_ad = _resp.current_ad;
					if (_whichAd == 0 ) {
						var next_ad = 'http://sonyainc.net/polyads/ads/prototype_example_1.jpg';
					} else {
						var next_ad = 'http://sonyainc.net/polyads/ads/prototype_example_2.jpg';
					}

					var ad = document.getElementById("ad1");

					var $image = $(ad).children("img");
					$image.remove();
				
					var adImg= document.createElement('img');
					adImg.setAttribute('src', next_ad );
					ad.appendChild(adImg);

                }//end exception catch
            }// end parseRequest
			

			