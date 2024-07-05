$(document).ready(function(){

	$(".slider").owlCarousel({
      stagePadding:1,
      loop:true,
      autoplay:true,
      autoplaySpeed:1000,
      autoplayTimeout:2000,
      nav:true,
      navText: ["<div class ='nat'><i class='fas fa-chevron-left'></i></div>", "<div class ='nat'><i class='fas fa-chevron-right'></i></div>"],

      responsive:{
      	0:{
      		items:4
      	},
      	768:{
      		items:6
      	}
      }
  });
     $(window).scroll(function(){
            if($(window).scrollTop()>20)
            {     $(".scrollbtn").show();
             }
             else
             {
                  $(".scrollbtn").hide();
             }
     });
  
});
