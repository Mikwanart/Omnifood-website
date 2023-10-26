
$(document).ready(function(){

    /* STICKY Navigation */
    $('.js--features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky')
        }
        else{
            $('nav').removeClass('sticky')
        }

       }, {
        offset: '60px' 
    });

    /* SCROLL on buttons */
    $('.js--btnfull').click(function(){
        $('html, body').animate({scrollTop : $('.js--plans').offset().top}, 1000);
    });

    $('.js--btnghost').click(function(){
        $('html, body').animate({scrollTop : $('.js--features').offset().top},1000);
    });

    /* SCROLL on navigation links */
        









});


