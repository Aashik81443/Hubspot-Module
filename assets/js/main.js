$(document).ready(function () {
	$('.tab-heading ul li button').click(function (e) {
		$('.btn-primary').removeClass('active');
		$(this).addClass('active');

		$('.tab-item').hide();
		let cid = $(this).attr('cid')
		$(`#${cid}`).fadeIn()
		console.log($(`#${cid}`));
	});
});


/**
 * File main.js.
 *
 * Theme main script.
 *
 * Contains all theme custom features.
 */
var ss;
(function ($) {
	ss = {
		init: function () {
			this.img();
			this.nav();
			this.form();
			this.misc();
			this.slider();
			this.gallery();
		},
		ie: function () {
			try {
				if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
					$('body').addClass('ie-user');
					return true;
				}
			} catch (err) {
				console.log(err);
			}
			return false;
		},
		img: function (context) {
			if (!context) context = $('body');
			context.find('.bg-cover,[data-fix="image"]').each(function () {
				var wrap = $(this), image = wrap.find('>img');
				if (image.attr('src')) {
					if (wrap.data('fix') != 'image') {
						image.hide();
						wrap.css({ 'background-image': 'url(\'' + image.attr('src') + '\')' });
					} else {
						wrap.find('.svg.img-fluid').css({ 'background-image': 'url(\'' + image.attr('src') + '\')' });
					}
				}
				if (ss.ie()) {
					wrap.find('.svg').removeClass('img-fluid');
				}
			});
		},
		nav: function () {
			//sticky header
			function stickyHeader() {
				var height = $(window).scrollTop();
				var header = $(".site-header");
				var headerTopHeight = $(".header-top").outerHeight();
				if (height > 60) {
					header.addClass("sticky");
					header.css("top", "-" + headerTopHeight + "px");
				} else {
					header.css("top", 0);
					header.removeClass("sticky");
				}
			}
			jQuery(window).resize(stickyHeader);
			jQuery(window).scroll(stickyHeader);
			stickyHeader();

			//site-content padding
			// function siteContentPadding(){
			// 	var headerHeight = jQuery(".header-top").outerHeight();
			// 	var mainContent = jQuery(".site-content");
			// 	mainContent.css("padding-top", headerHeight);
			// }
			// siteContentPadding();
			// jQuery(window).resize(siteContentPadding);

			//dropdown toggle
			$(".navbar-nav .menu-item-has-children .caret").on(
				"click",
				function () {
					$(this).next(".dropdown-menu").slideToggle();
				}
			);
		},
		form: function () {
			try {
				$('.input-text.qty').each(function () {
					var elm = $(this);
					$('<span class="qty-des"><i class="icon-angle-left"></i></span>').insertBefore($(this));
					$('<span class="qty-ins"><i class="icon-angle-right"></i></span>').insertAfter($(this));
					elm.prev('.qty-des').on('click', function () {
						var val = parseInt(elm.val());
						if (val > 1) {
							elm.val(val - 1);
						}
					});
					elm.next('.qty-ins').on('click', function () {
						var val = parseInt(elm.val());
						elm.val(val + 1);
					});
				});
			} catch (err) {
				console.log(err);
			}
		},
		misc: function () {
			try {
				$('[data-fix="height"]').matchHeight();
			} catch (err) {
				console.log(err);
			}
		},
		slider: function () {

			// slider-col-3
			$(".custom-slider").slick({
				dots: false,
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							adaptiveHeight: true,
						},
					},
				],
			});
			// slider-col-3
			$(".dots-slider").slick({
				dots: true,
				arrows: false,
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,

						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							adaptiveHeight: true,
						},
					},
				],
			});

		},
		gallery: function () {
			try {
				$('.fancybox').fancybox({
					openEffect: 'none',
					closeEffect: 'none'
				});
			} catch (err) {
				console.log(err);
			}
			try {
				var fix = function () {
					var t = $('.woocommerce-product-gallery__trigger'), h = t.next('.flex-viewport').outerHeight() - 16;
					t.height(h);
				}
				$(window).bind('load resize', fix);
				$('.woocommerce-product-gallery .flex-control-nav li').on('click', function () {
					setTimeout(fix, 500);
				});
			} catch (err) {
				console.log(err);
			}
		}
	};
	$(function () {
		ss.init();

		//site-content padding
		// var headerHeight = $('.site-header').innerHeight();
		// var siteContent = $('.site-content');

		// siteContent.css("padding-top", headerHeight + 'px');

		// $(window).resize(function () {
		// 	//site-content padding
		// 	var headerHeight = $('.site-header').innerHeight();
		// 	var siteContent = $('.site-content');

		// 	siteContent.css("padding-top", headerHeight + 'px');
		// });
	});

	$('#exampleModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var recipient = button.data('whatever') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		modal.find('.modal-title').text('New message to ' + recipient)
		modal.find('.modal-body input').val(recipient)
	})

})(jQuery);


$(document).ready(function () {
	$('.accordion-list > li > .answer').hide();

	$('.accordion-list > li').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").find(".answer").slideUp();
		} else {
			$(".accordion-list > li.active .answer").slideUp();
			$(".accordion-list > li.active").removeClass("active");
			$(this).addClass("active").find(".answer").slideDown();
		}
		return false;
	});

});
$(document).ready(function () {
	try {
		$(".fancybox").fancybox({
			openEffect: "none",
			closeEffect: "none",
		});
	} catch (err) {
		console.log(err);
	}
	try {
		var fix = function () {
			var t = $(".woocommerce-product-gallery__trigger"),
				h = t.next(".flex-viewport").outerHeight() - 16;
			t.height(h);
		};
		$(window).bind("load resize", fix);
		$(".woocommerce-product-gallery .flex-control-nav li").on(
			"click",
			function () {
				setTimeout(fix, 500);
			}
		);
	} catch (err) {
		console.log(err);
	}
});



