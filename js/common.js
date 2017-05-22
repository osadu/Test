$(document).ready(function(){



    var owl = $('.header-owl-slider');

        owl.owlCarousel({
		items:1,
		autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
        nav:false,
        dots:false,
	    });

    var numOfSlider = $(".slider-item").length;
    $(".count-slide").html(numOfSlider);

	$('.next').click(function() {
        owl.trigger('next.owl.carousel');
    });


	$('.prev').click(function() {
    	owl.trigger('prev.owl.carousel', [300]);
	});

	owl.on('changed.owl.carousel', function(event) {
        var currentItem = event.item.index;
        $(".current-slide").html(currentItem+1);
    })   


	$("#current-language").click(function(){
		
		$(this).next(".list-languages").slideToggle();
		$(this).find(".fa").toggleClass("fa-caret-up");

	});  

	$("#current-category").click(function(){

        $(this).next(".list-of-category").slideToggle();
		$(this).find(".fa").toggleClass("fa-caret-up");

	});

	$(".list-of-category").find("li").click(function(){
		var value = $(this).attr("data-val");
		$("#current-category").find(".current-category-val").html(value);
		$(".list-of-category").slideToggle();
		$("#current-category").find(".fa").toggleClass("fa-caret-up");
		$("#cat").attr("value",value);
	});  

	$('.header-menu nav>ul>li>a').equalHeights();

    $('.header-menu nav>ul>li>a').click(function(){
        
        $(this).next("ul").slideToggle();
        $(this).find(".fa").toggleClass("fa-caret-up");
        $(this).toggleClass("menu-link-hover");

    });



});