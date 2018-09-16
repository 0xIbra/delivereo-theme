$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() < 2)
        {
            $('header.main nav').addClass('top');
        }else{
            $('header.main nav').removeClass('top');
        }
    });

    $('.sidenav').sidenav({ edge: 'right' });
    $('.tabs').tabs();
});