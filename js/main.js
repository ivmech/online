// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var hash = window.location.hash;
    var page = hash.replace("#", "");

    var products = ["olcumtakip", "ivport", "motorsurucu", "tinkerforge", "mico" , "itar", "poehat", "ivportscm"];
    var projects = ["laboratuvarmobil", "ivled", "diger"];
    if (products.indexOf(page) >= 0) {
         $('#'+page+'Modal').modal({
            remote : 'pages/products/'+page+'.html'
        });
    }
    else if(projects.indexOf(page) >= 0) {
        $('#'+page+'Modal').modal({
            remote : 'pages/projects/'+page+'.html'
        });
    }
    else {
        $('#'+page+'Modal').modal({
            remote : 'pages/'+page+'/'+page+'.html'
        });
    }
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
//$('.navbar-collapse ul li a').click(function() {
//    $('.navbar-toggle:visible').click();
//});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse .page-scroll').click(function() {
    $('.navbar-toggle:visible').click();
});

/*
$(function() {
	$window = $(window);

	$body = $('body');
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});


    // Init Skrollr
    var s = skrollr.init({
        smoothScrolling: false,
        mobileDeceleration: 0.004,
        easing: {
        WTF: Math.random,
        inverted: function(p) {
            return 1-p;
        }
    }
    });
});
*/


( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.gap');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});


	
	function adjustWindow(){

	    // Get window size
	    winH = $window.height();
	    winW = $window.width();

	    // Keep minimum height 550
	    if(winH <= 550) {
	        winH = 550;
	    }

	    // Init Skrollr for 768 and up
	    if( winW >= 768) {

	        // Init Skrollr
	        var s = skrollr.init({
	            forceHeight: false,
                smoothScrolling: false,
	        });

	        // Resize our slides
	        $slide.height(winH);

	        s.refresh($('.gap'));

	    } else {

	        // Init Skrollr
	        var s = skrollr.init();
	        s.destroy();
	    }
	
		// Check for touch
	   	if(Modernizr.touch) {

			// Init Skrollr
			var s = skrollr.init();
			s.destroy();
	   	}

	}
	
	function initAdjustWindow() {
	    return {
	        match : function() {
	            adjustWindow();
	        },
	        unmatch : function() {
	            adjustWindow();
	        }
	    };
	}

	enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false)
	        .listen(100);
		
} )( jQuery );


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-33772548-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

