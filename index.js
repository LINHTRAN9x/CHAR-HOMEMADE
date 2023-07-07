$(function(){
    $('#main-menu').hide().slideDown();
    var $banner = $('.banner');
    var $title = $('.title-banner');
    $banner.hide().each(function(index){
        $(this).delay(1000 * index).fadeIn(1900);
    });  
});

$(function(){
   
    $('.title-banner').on('load', function(){   
                $(this).animate({
                    marginLeft: '-=950'
                },1000);
                $(this).each(function(on){
                    $(this).delay(10000*on).hide().slideDown(1200).fadeIn(1000)
                });
            }).trigger('load');  
        });

$(function(){
    $('.singer-banner').on('mouseover' , function(i){
        $(this).delay(200).fadeOut(100).fadeIn(1000);
            
        });
    });

$(function(){
    $('.image').on('mouseenter' , function(){
        $('.image-drop-down').hide().slideDown(500).fadeIn(1000)
    });
    $('.image').on('mouseleave' , function(){
        $('.image-drop-down').animate({
            paddingLeft: '+=80',
        },1000, function(){
            $(this).css('paddingLeft' , '');
        });
    });
});

$(function() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
        $('#control-header').addClass('menu-visible').hide().slideDown(300);
        
      } else {
        $('#control-header').removeClass('menu-visible');
      }
      
    });
  });
  
$(function() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 1000) {
        
        $('.backtotop').css('visibility', '').addClass('scrollUp').hide().slideDown(300);
        
      } else {
        $('#control-header').removeClass('scrollUp');
      }
      
    });
  }); 
$('.backtotop').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 1500);
  });


  
  
        
    
