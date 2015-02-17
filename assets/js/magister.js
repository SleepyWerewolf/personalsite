// Currently active item
var current_item = 0;

// Fade duration settings
var section_hide_time = 1000;
var section_show_time = 1000;

jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(switchSection);
	$('.btn-contact').click(switchSection);

	$('.btn.btn-no-filter').click(function() {
		$('.work-thumbnail').removeClass('thumbnail-hide');
	});

	$('.btn.btn-website').click(function() {
		$('.work-website').removeClass('thumbnail-hide');
		$('.work-wordpress, .work-application').addClass('thumbnail-hide');
	});

	$('.btn.btn-wordpress').click(function() {
		$('.work-wordpress').removeClass('thumbnail-hide');
		$('.work-website, .work-application').addClass('thumbnail-hide');
	});

	$('.btn.btn-application').click(function() {
		$('.work-application').removeClass('thumbnail-hide');
		$('.work-website, .work-wordpress').addClass('thumbnail-hide');
	});

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