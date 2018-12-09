/*It is the JS File of navigation Bar
It contains the following functions:
 1. Changing the active menu on scrolling
 2. Changing the navbar color on scrolling
 3. Changing the menu color on scrolling
 4. Shrinking the navbar on scrolling

 function 1 and 4 not working. Check css too.
*/

$(document).ready(function ()
{
  $(".button-collapse").sideNav();
  $(window).scroll(function(){
    if($(window).scrollTop()>0)//scrolling is more than zero
    {
      $('.nav-wrapper').addClass('white');
      $('#navmenu li a span').css("color", "black");
      $('.nav-wrapper').addClass('shrink');
    }
    else
    {
      $('.nav-wrapper').removeClass('white');
      $('#navmenu li a span').css("color","white");
      $('.nav-wrapper').removeClass('shrink');
    }
  });

  //CAROUSEL
  $('.carousel').carousel();
});
