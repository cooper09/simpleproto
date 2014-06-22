$(document).ready(function(){

  var open1 = 0;
  var open2 = 0;
  var open3 = 0;
  var open4 = 0;

	$("#btn1").click(function(){
    $("#dropdown").css("display","inline-block");
    $("#dropdown2").css("height","0em");
    $("#dropdown3").css("height","0em");
    $("#dropdown4").css("height","0em");

    open2 = 0;
    open3 = 0;
    open4 = 0;

    switch (open1) { 
      case 0:
       $("#dropdown").animate({
          height: '100',
        }, 200, 'swing', function() {
          // Animation complete.
          open1 = 1;
          console.log("btn1 now open: "+ open1 )
        });// end animate
       break;
      case 1:
       $("#dropdown").animate({
          height: '0'
        }, 200, function() {
          // Animation complete.
          open1 = 0;
          console.log("btn1 now closed: "+ open1 )
        });// end animate
       break;
    }//end switch


  });//end btn1 click

	$("#btn2").click(function(){
    $("#dropdown2").css("display","inline-block");
    $("#dropdown").css("height","0em");
    $("#dropdown3").css("height","0em");
    $("#dropdown4").css("height","0em");

    open1 = 0;
    open3 = 0;
    open4 = 0;

      switch (open2) { 
        case 0:
         $("#dropdown2").animate({
            height: '100'
          }, 200,  function() {
            // Animation complete.
            open2 = 1;
            console.log("btn2 now open: "+ open2 )
          });// end animate
         break;
        case 1:
         $("#dropdown2").animate({
            height: '0'
          }, 200, function() {
            // Animation complete.
            open2 = 0;
            console.log("btn2 now closed: "+ open2 )
          });// end animate
         break;
      }//end switch
     });//end btn2 click

	$("#btn3").click(function(){
    $("#dropdown3").css("display","inline-block");
    $("#dropdown").css("height","0em");
    $("#dropdown2").css("height","0em");
    $("#dropdown4").css("height","0em");

    open1 = 0;
    open2 = 0;
    open4 = 0;

      switch (open3) { 
      case 0:
       $("#dropdown3").animate({
          height: '100'
        }, 200, function() {
          // Animation complete.
          open3 = 1;
          console.log("btn3 now open: "+ open3 )
        });// end animate
       break;
      case 1:
       $("#dropdown3").animate({
          height: '0'
        }, 200, function() {
          // Animation complete.
          open3 = 0;
          console.log("btn3 now closed: "+ open3 )
        });// end animate
       break;
    }//end switch


     });//end btn3 click

	$("#btn4").click(function(){	
    $("#dropdown4").css("display","inline-block");
    $("#dropdown").css("height","0em");
    $("#dropdown2").css("height","0em");
    $("#dropdown3").css("height","0em");

    open1 = 0;
    open2 = 0;
    open3 = 0;

      switch (open4) { 
      case 0:
       $("#dropdown4").animate({
          height: '100'
        }, 200, function() {
          // Animation complete.
          open4 = 1;
          console.log("btn4 now open: "+ open4 )
        });// end animate
       break;
      case 1:
       $("#dropdown4").animate({
          height: '0'
        }, 200, function() {
          // Animation complete.
          open4 = 0;
          console.log("btn4 now closed: "+ open4 )
        });// end animate
       break;
    }//end switch


   });//end btn4 click


  $(function() {
                $('ul.nav a').bind('click',function(event){
                    var $anchor = $(this);
                    /*
                    if you want to use one of the easing effects:
                    $('html, body').stop().animate({
                        scrollLeft: $($anchor.attr('href')).offset().left
                    }, 1500,'easeInOutExpo');
                     */
                    $('html, body').stop().animate({
                        scrollLeft: $($anchor.attr('href')).offset().left
                    }, 1000);
                    event.preventDefault();
                });
            });

  });//end document ready


