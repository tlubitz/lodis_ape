/*
Name: 			Education
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.3.0
*/

(function( $ ) {

	'use strict';

	/*
	Slider
	*/
	if( $('#revolutionSlider').get(0) ) {
		$('#revolutionSlider').revolution({
			sliderType: 'standard',
			sliderLayout: 'auto',
			delay: 9000,
			responsiveLevels: [4096,1200,992,576],
			gridwidth:[1100,920,680,500],
			gridheight: 740,
			disableProgressBar: 'on',
			spinner: 'spinner3',
			parallax:{
				type:"on",
				levels:[20,40,60,80,100],
				origo:"enterpoint",
				speed:400,
				bgparallax:"on",
				disable_onmobile:"off"
			},
			navigation: {
				arrows: {
					enable: true
				}
			},
		});
	}

	/*
	* Register Form Validation
	*/
	$('#registerForm').validate({
		onkeyup: false,
		onclick: false,
		onfocusout: false,
		errorPlacement: function(error, element) {
			if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
				error.appendTo(element.parent().parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

}).apply( this, [ jQuery ]);