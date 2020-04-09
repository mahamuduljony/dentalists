$(document).ready(function(){

	//Responsive-Menu
	jQuery('#m-menu').meanmenu({
		meanMenuContainer: '.m-mobile',
		meanScreenWidth: "767"
	});

	
	//hero-slider
	var slider = tns({
    container: '.main-slider-active',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed:300,
	autoplayTimeout: 3000,
    nav: true,
    navPosition:'bottom',
    controls:true,
    mouseDrag:true,
    controlsText:['<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
	    0: {
	      	controls:false,
	      	autoplay:true
	    },
	    600: {
	        controls:false,
	        autoplay:true
	    },
	    1000: {
	      	controls:true,
	      	autoplay:true
	    }
    }
  });

	//blog-slider
	var slider = tns({
    container: '.blog-active-slider',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    speed:300,
	autoplayTimeout: 3000,
    nav: true,
    controls:false,
    mouseDrag:true,
    navPosition:'bottom',
    gutter:20,
    responsiveClass: true,
    responsive: {
      0: {
        gutter: 20,
        items: 1
      },
      700: {
        items:1
      },
      1169: {
        items: 2
      }
    }
  });

	//client-slider
	var slider = tns({
    container: '.client-active-slider',
    items: 5,
    slideBy: 'page',
    autoplay: true,
    speed:300,
	autoplayTimeout: 3000,
    nav: false,
    controlsText:['<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
    controls:true,
    mouseDrag:true,
    navPosition:'bottom',
    gutter:20,
    responsiveClass: true,
    responsive: {
      0: {
        gutter: 20,
        items: 1
      },
      700: {
        items:1
      },
      1169: {
        items: 5
      }
    }
  });

	//testimonial-slider
	var slider = tns({
    container: '.testimonial-active-slider',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    speed:300,
	autoplayTimeout: 3000,
    nav: true,
    controls:false,
    mouseDrag:true,
    navPosition:'bottom',
    gutter:20,
	responsiveClass: true,
    responsive: {
      0: {
        gutter: 20,
        items: 1
      },
      700: {
        items:1
      },
      1169: {
        items: 2
      }
    }
  });

})
  