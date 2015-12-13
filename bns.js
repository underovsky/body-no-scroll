/*
Body No-scroll
https://github.com/underovsky/body-no-scroll
The MIT License (MIT)
Copyright (c) 2015 Krzysztof Rusnarczyk
*/
(function(name) {
	function BNS() {
		var settings = {
			prevScroll: 0,
			prevPosition: '',
			prevOverflow: '',
			on: false
		};
		
		var getPrev = function() {
			settings.prevScroll = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
			settings.prevPosition = document.body.style.position;
			settings.prevOverflow = document.body.style.overflow;
		};
		
		return {
			on: function() {
				if (settings.on) return;
				settings.on = true;
				getPrev();
				document.body.style.position = 'fixed';
				document.body.style.overflow = 'hidden';
				document.body.style.top = -settings.prevScroll + 'px';
			},
			off: function() {
				if (!settings.on) return;
				settings.on = false;
				document.body.style.position = settings.prevPosition;
				document.body.style.overflow = settings.prevOverflow;
				document.body.style.top = 0;
				window.scrollTo(0, settings.prevScroll);
			}
		};
	}
	
	window[name] = new BNS();
})('BNS');
