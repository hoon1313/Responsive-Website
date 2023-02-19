$(document).ready(function(){

/* 전체메뉴 */
$(".title .btn").click(function(e){
    e.preventDefault();
    $(".nav").stop().slideToggle();
});

/* 슬릭슬라이더 */

    $('.slider').slick({
        dots: true,
        arrows:true,
        autoplay : true,
        autoplaySpeed : 3000,
        responsive : { 
            breakpoint:768,
            settings : {
                arrows:true,
                dots:false, 
                autoplay : false
            }
        }
    });

$(".lightbox").lightGallery({
    thumnail: true,
}); 
    
});
