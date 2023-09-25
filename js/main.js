$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    items:1,
    autoplay:true ,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$("#search-btn").click(function(){
    $("#s-bar").toggle()
})




 
