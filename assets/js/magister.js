// Currently active item
var current_item = 0;

// Fade duration settings
var section_hide_time = 1000;
var section_show_time = 1000;

jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(switchSection);
	$('.btn-contact').click(switchSection);

	function switchSection() {
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );
				if (!$(current_item).hasClass('btn'))
					$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	}
});