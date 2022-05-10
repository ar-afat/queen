(function ($) {
	"use strict";
	$('select').niceSelect();


	//preloader js
	window.onload = function(){
		setInterval(function(){
			$(".loading").fadeOut(100);	
		}, 500);
	};

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	$('.open-mobile-menu').on('click', function () {
		$('.side-info').addClass('info-open');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.side-info-close,.offcanvas-overlay,.mobile_one_page li.menu-item a.nav-link').on('click', function () {
		$('.side-info').removeClass('info-open');
		$('.offcanvas-overlay').removeClass('overlay-open');
	})

	//sidebar
	$('.open-sidebar').on('click', function () {
		$('.offcanvas-menu-wrap').addClass('sidebar-open');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.side-info-close,.offcanvas-overlay,.close-btn').on('click', function () {
		$('.offcanvas-menu-wrap').removeClass('sidebar-open');
		$('.offcanvas-overlay').removeClass('overlay-open');
	})
	// 05. Data-Background Js
	$("[data-background").each(function () {
	$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	/* 
	-----------------------------
	Aos JQUERY PLUGIN
	-----------------------------
	
	*/
	$('.demo').lightcase();
    new WOW().init();
	/* 






	-----------------------------
	SLICK ACTIVATION BLOG HOMEPAGE ONE
	-----------------------------
	
	*/
	//blog single active
	var $singleblog = $('.blog_single_active');
	if ($singleblog.length > 0) {
		$singleblog.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="prev-arrow-blog"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button class="next-arrow-blog"><i class="fas fa-chevron-right"></i></button>',
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}
	//instagram activition
	var $instagram = $('.active-instagram');
	if ($instagram.length > 0) {
		$instagram.slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	//magnifi popup
	$('.video-open').magnificPopup({ type: 'iframe' });
	//tips slider active
		//magnifi popup
		$('.insta').magnificPopup({ type: 'image' });
		//tips slider active

	var $tips = $('.tips-slider-active');
	if ($tips.length > 0) {
		$tips.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="tipsbtn prev-arrow-tips"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button class="tipsbtn next-arrow-tips"><i class="fas fa-chevron-right"></i></button>',
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 2,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	var $blogHome = $('.blogHome-active');
	if ($blogHome.length > 0) {
		$blogHome.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="tipsbtn prev-arrow-tips bloghomearrow"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button class="tipsbtn next-arrow-tips bloghomearrow"><i class="fas fa-chevron-right"></i></button>',
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 2,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}
	var $blogdetailspost = $('.post-details-active');
	if ($blogdetailspost.length > 0) {
		$blogdetailspost.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="tipsbtn prev-arrow-tips bloghomearrow blog-details-prev"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button class="tipsbtn next-arrow-tips bloghomearrow blog-details-next"><i class="fas fa-chevron-right"></i></button>',
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	var $blogdetailsposttwo = $('.post-details-active-2');
	if ($blogdetailsposttwo.length > 0) {
		$blogdetailsposttwo.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="tipsbtn prev-arrow-tips bloghomearrow blog-details-prev"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button class="tipsbtn next-arrow-tips bloghomearrow blog-details-next"><i class="fas fa-chevron-right"></i></button>',
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}
	var $members = $('.members-slider-active');
	if ($members.length > 0) {
		$members.slick({
			dots: true,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}



	// Sticky Header Js

	$(window).on('scroll', function () {

		var scroll = $(window).scrollTop();

		if (scroll < 245) {

			$("#header-sticky").removeClass("sticky-bar");

		} else {

			$("#header-sticky").addClass("sticky-bar");

		}

	});



	$('.hero-slider-item').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		   autoplay: true
	  });
	  $('.slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.hero-slider-item',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		prevArrow: '<button class="tipsbtn prev-arrow-tips slider-hero"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button class="tipsbtn next-arrow-tips slider-hero"><i class="fas fa-chevron-right"></i></button>',
	  
	  });

			  



})(jQuery);