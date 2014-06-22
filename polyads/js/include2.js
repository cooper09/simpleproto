
var test;
var img;
var mmjsCountryCode = geoip_country_code();
var mmjsCity = geoip_city();
var mmjsRegionName = geoip_region_name();
var $j = jQuery.noConflict();
$j(function(){
  $j('#ad').text(test);
  $j('#adImg').attr('src',img);
});
  $j('#adImg').click(function () {
  	alert("TEST - clicked by user in the following location - country code: " + mmjsCountryCode + " city: " + mmjsCity + " region: " + mmjsRegionName );
  	//addClick();
  	addClick(test, 'ralph lauren', img,'000'); 
});
function addClick (publisher, campaign, location, adno ) {
alert("adding data");
  $j.ajax({
       url: 'http://sonyainc.net/polyads/php/insert_data.php?publisher='+publisher+'&campaign='+campaign+'&location='+location+'&adno='+adno,
       dataType: 'jsonp',
            success: function(dataWeGotViaJsonp){
                 alert("oiula: " + dataWeGotViaJsonp );
             }
    });
}
function myCallback(data){
    test = data.name;
    img = data.image;
}//end myCallback
function putBack(response) {
	alert("putBack complete: " + response);
}