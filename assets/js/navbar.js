/*It is the JS File of navigation Bar
It contains the following functions:
 1. Changing the active menu on scrolling
 2. Changing the navbar color on scrolling
 3. Changing the menu color on scrolling
 4. Shrinking the navbar on scrolling
*/

$(document).ready(function ()
{
    //function on scroll
    $(document).on("scroll", onScroll);

    //smoothscroll or click
    $('a[href^="#"]').on('click', function (e)
    {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function ()
        {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate(
        {
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function ()
        {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event)
{
    var scrollPos = $(document).scrollTop();
    if (scrollPos > 0)
    {
      //change navigation bar color from transparent to white on scrolling
      $("#navigationbar").css("background" , "white");
      //$("#navigationbar").css("opacity" , "1");
      //Shrink the navigation bar on scrolling
      $(".navbar").addClass("shrink");
      //change the font color to black
      //$(".nav-link").css("color","black");
    }
    else
    {
      //Change navigation bar color to transparent when scroll is zero
      $("#navigationbar").css("background-color" , "transparent");
      //$("#navigationbar").css("opacity" , "0.5");
      //Keep the navbar to its actual size
      $("#navigationbar").removeClass("shrink");
      //change the font color to white
      //$(".nav-link").css("color","white");
    }
    //change the active menu on the navbar as required
    $('#navbartoggler a').each(function ()
    {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos)
        {
            $('#navbartoggler ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else
        {
            currLink.removeClass("active");
        }
    });
}
