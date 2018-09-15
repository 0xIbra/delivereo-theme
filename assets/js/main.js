$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() < 2)
        {
            $('header nav').addClass('top');
        }else{
            $('header nav').removeClass('top');
        }
    });

    $('.sidenav').sidenav({ edge: 'right' });
});