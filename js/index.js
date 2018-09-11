$(document).ready(function(){
    
    $(".nav-link").click(function(){
        $('html,body').animate({ scrollTop: $(this.hash).offset().top -80 }, 1400);
        return false;
    });
    
    $(".top-link").click(function(){
        $('html,body').animate({ scrollTop: $("#topSection").offset().top }, 2000);
        return false;
    });
    
    $(document).scroll(function(){
        ($(document).scrollTop() >= 110) ? (
            $('.nav-bar').addClass('scrolled')
        ) : (
            $('.nav-bar').removeClass('scrolled')
        );
    });
    
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('#contactSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#contactLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#eventsSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#servicesLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#teamSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#teamLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#aboutSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#aboutLink').addClass('active');
        } else if ($(window).scrollTop() >= $('#topSection').offset().top - $(window).height()/2 ) {
            $('.nav-link').removeClass('active');
            $('#topLink').addClass('active');
        }
    });
    
});