$(document).ready(function(){ 

$(".title .btn").click(function(e){
    e.preventDefault();
    $(".nav").stop().slideToggle();

})

});