$(document).ready(function()
{
    $(".dropdown").mouseenter(function()
    {
        $(this).children().fadeIn('fast');
        $(this).children().animate({fontSize: 50});
    });
    
    $(".dropdown").mouseleave(function()
    {
        $(".dropdown #list").fadeOut('fast');
        $(".dropdown #title, #list").animate({fontSize: 19});
    });
});