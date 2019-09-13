$(document).ready(function(){
  $('.carousel_content').slick({
    nextArrow: '.next',
    prevArrow: '.previous',
    touchMove: false,
    autoplay: true,
  	autoplaySpeed: 4000,
  });
  
   $('video').parent().click(function () {
    if($(this).children("video").get(0).paused){
        $(this).children("video").get(0).play();
        $(this).children(".playpause").hide();
    }else{
       $(this).children("video").get(0).pause();
        $(this).children(".playpause").show();
    }
   });
});
