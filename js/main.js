function centerModal() {
		$(this).css('display', 'block');
		var $dialog = $(this).find(".modal-dialog"),
			offset = ($(window).height() - $dialog.height()) / 2,
			bottomMargin = parseInt($dialog.css('marginBottom'), 10);

		// Make sure you don't hide the top part of the modal w/ a negative margin
		// if it's longer than the screen height, and keep the margin equal to 
		// the bottom margin of the modal
		if (offset < bottomMargin) offset = bottomMargin;
		$dialog.css("margin-top", offset);
	}

	$('.modal').on('show.bs.modal', centerModal);

	$('.modal-popup .close-link').click(function(event){
		event.preventDefault();
		$('#modal1').modal('hide');
	});

	$(window).on("resize", function() {
		$('.modal:visible').each(centerModal);
	});
$(document).ready(function(){
	$(".nav_button").click(function(){
		$("nav.site_nav").slideToggle();

	}); 
});

(function() {
	var morphSearch = document.getElementById( 'morphsearch' ),
		input = morphSearch.querySelector( 'input.morphsearch-input' ),
		ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
		isOpen = isAnimating = false,
		// show/hide search area
		toggleSearch = function(evt) {
			// return if open and the input gets focused
			if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

			var offsets = morphsearch.getBoundingClientRect();
			if( isOpen ) {
				classie.remove( morphSearch, 'open' );

				// trick to hide input text once the search overlay closes 
				// todo: hardcoded times, should be done after transition ends
				if( input.value !== '' ) {
					setTimeout(function() {
						classie.add( morphSearch, 'hideInput' );
						setTimeout(function() {
							classie.remove( morphSearch, 'hideInput' );
							input.value = '';
						}, 300 );
					}, 500);
				}
				
				input.blur();
			}
			else {
				classie.add( morphSearch, 'open' );
			}
			isOpen = !isOpen;
		};

	// events
	input.addEventListener( 'focus', toggleSearch );
	ctrlClose.addEventListener( 'click', toggleSearch );
	// esc key closes search overlay
	// keyboard navigation events
	document.addEventListener( 'keydown', function( ev ) {
		var keyCode = ev.keyCode || ev.which;
		if( keyCode === 27 && isOpen ) {
			toggleSearch(ev);
		}
	} );


	/***** for demo purposes only: don't allow to submit the form *****/
	morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
})();


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// WAYPOINTS
  // hide our element on page load         
  $('.post').waypoint(function() {
    $('.post').addClass('fadeInLeft');

  }, {offset: '75%' });

function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '65%'
        });
  });
}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
// END WAYPOINTS




