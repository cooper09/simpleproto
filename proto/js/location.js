
        var latitude;
        var longitude;

        var x=document.getElementById("demo");
        function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            }
          else{x.innerHTML="Geolocation is not supported by this browser.";
          }
        }
        function showPosition(position) {
          x.innerHTML="Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude; 
          }

      $( document ).ready(function() {
          var x=document.getElementById("demo");
          
          function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
              }
            else{x.innerHTML="Geolocation is not supported by this browser.";
            }
          }

        function showPosition(position) {
          x.innerHTML="Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude; 

          latitude = position.coords.latitude;
          longitude = position.coords.longitude;

            getLocationDetails()

  // Convert lat and long into city/country 

      var country,state,city,pinCode;
      function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();

        if ("withCredentials" in xhr) {
          // XHR for Chrome/Firefox/Opera/Safari.
          xhr.open(method, url, true);

        } else if (typeof XDomainRequest != "undefined") {
          // XDomainRequest for IE.
          xhr = new XDomainRequest();
          xhr.open(method, url);

        } else {
          // CORS not supported.
          xhr = null;
        }
        return xhr;
      }

      function getLocationDetails()
      {
      hide();
      latitude1=latitude;
      longitude1=longitude;

      var url="http://maps.googleapis.com/maps/api/geocode/json?latlng="+
              latitude1+","+longitude1+"&sensor=true";
          var xhr = createCORSRequest('POST', url);
                 if (!xhr) {
                   alert('CORS not supported');
                 }
               
                 xhr.onload = function() {
              
                  var data =JSON.parse(xhr.responseText);
                  
                  if(data.results.length>0)
                  {
                  
                  var locationDetails=data.results[0].formatted_address;
                  var  value=locationDetails.split(",");
                  
                  count=value.length;
                  
                   country=value[count-1];
                   state=value[count-2];
                   city=value[count-3];
                   pin=state.split(" ");
                   pinCode=pin[pin.length-1];
                   state=state.replace(pinCode,' ');         
                   document.getElementById("val").innerHTML=country+
                     " | "+state+" | "+city+"  | "+pinCode;
                  }
                  else
                  {
                   document.getElementById("messageBox").style.visibility="hidden";
                   document.getElementById("message").innerHTML=
                     "No location available for provided details.";
                  }
                  
                 };

                 xhr.onerror = function() {
                     alert('Woops, there was an error making the request.');
                     
                 };
                  xhr.send();
                  
                  }

                  function hide()
                  {
                    document.getElementById("messageBox").style.visibility="hidden";
                  }
             }

          getLocation();

      });     

