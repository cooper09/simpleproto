$(document).ready(function(){

  
    $("#menuBtn").toggle(function(){
      $("#menu .mzr-responsive").css("display","block")
      $("#menu").css("display","block")
    } $("#menuBtn").toggle(function(){
      $("#menu .mzr-responsive").css("display","block")
      $("#menu").css("display","block")
    }
   );

  var open1 = 0;
  var open2 = 0;
  var open3 = 0;
  var open4 = 0;

	$("#btn1").click(function(){
    $("#btn2").css("height","1.5em");
    $("#btn3").css("height","1.5em");
    $("#btn4").css("height","1.5em");

    open2 = 0;
    open3 = 0;
    open4 = 0;

    switch (open1) { 
      case 0:
       $(this).animate({
          height: '100',
        }, 200, 'swing', function() {
          // Animation complete.
          open1 = 1;
          console.log("btn1 now open: "+ open1 )
        });// end animate
       break;
      case 1:
       $(this).animate({
          height: '25'
        }, 200, function() {
          // Animation complete.
          open1 = 0;
          console.log("btn1 now closed: "+ open1 )
        });// end animate
       break;
    }//end switch


  });//end btn1 click

	$("#btn2").click(function(){
    $("#btn1").css("height","1.5em");
    $("#btn3").css("height","1.5em");
    $("#btn4").css("height","1.5em");

    open1 = 0;
    open3 = 0;
    open4 = 0;

      switch (open2) { 
        case 0:
         $(this).animate({
            height: '100'
          }, 200,  function() {
            // Animation complete.
            open2 = 1;
            console.log("btn2 now open: "+ open2 )
          });// end animate
         break;
        case 1:
         $(this).animate({
            height: '25'
          }, 200, function() {
            // Animation complete.
            open2 = 0;
            console.log("btn2 now closed: "+ open2 )
          });// end animate
         break;
      }//end switch
     });//end btn2 click

	$("#btn3").click(function(){
    $("#btn1").css("height","1.5em");
    $("#btn2").css("height","1.5em");
    $("#btn4").css("height","1.5em");

    open1 = 0;
    open2 = 0;
    open4 = 0;

      switch (open3) { 
      case 0:
       $(this).animate({
          height: '100'
        }, 200, function() {
          // Animation complete.
          open3 = 1;
          console.log("btn3 now open: "+ open3 )
        });// end animate
       break;
      case 1:
       $(this).animate({
          height: '25'
        }, 200, function() {
          // Animation complete.
          open3 = 0;
          console.log("btn3 now closed: "+ open3 )
        });// end animate
       break;
    }//end switch


     });//end btn3 click

	$("#btn4").click(function(){	
    $("#btn1").css("height","1.5em");
    $("#btn2").css("height","1.5em");
    $("#btn3").css("height","1.5em");

    open1 = 0;
    open2 = 0;
    open3 = 0;

      switch (open4) { 
      case 0:
       $(this).animate({
          height: '100'
        }, 200, function() {
          // Animation complete.
          open4 = 1;
          console.log("btn4 now open: "+ open4 )
        });// end animate
       break;
      case 1:
       $(this).animate({
          height: '25'
        }, 200, function() {
          // Animation complete.
          open4 = 0;
          console.log("btn4 now closed: "+ open4 )
        });// end animate
       break;
    }//end switch


   });//end btn4 click
  });//end document ready
