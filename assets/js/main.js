/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
document.addEventListener('DOMContentLoaded', function() {
	const text = [
		"Texas A&M",
		"Women In Cybersecurity",
		"(College Station)"
	];
	const speed = 100; // Typing speed in milliseconds

	function typeWriter() {
		const container = document.getElementById('typewriter-text');
		let i = 0;
		let line = 0;

		function type() {
			if (line < text.length) {
				if (i < text[line].length) {
					container.innerHTML += text[line].charAt(i);
					i++;
					setTimeout(type, speed);
				} else {
					container.innerHTML += '<br>'; // Move to the next line
					line++;
					i = 0;
					setTimeout(type, speed);
				}
			}
		}

		type();
	}

	typeWriter();
});


	document.addEventListener('DOMContentLoaded', function() {
		const text = "Our Alumni";
		const speed = 100; // Typing speed in milliseconds
	
		function typeWriter() {
			const container = document.getElementById('typewriter-text8');
			let i = 0;
	
			function type() {
			if (i < text.length) {
				container.textContent += text.charAt(i);
				i++;
				setTimeout(type, speed);
			}
			}
	
			type();
		}
	
		typeWriter();
		});
document.addEventListener('DOMContentLoaded', function() {
		const text = "About Us";
		const speed = 100; // Typing speed in milliseconds
	
		function typeWriter() {
			const container = document.getElementById('typewriter-text2');
			let i = 0;
	
			function type() {
			if (i < text.length) {
				container.textContent += text.charAt(i);
				i++;
				setTimeout(type, speed);
			}
			}
	
			type();
		}
	
		typeWriter();
		});
		document.addEventListener("DOMContentLoaded", function() {
			const cards = document.querySelectorAll('.card');
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.style.opacity = 1;
						entry.target.style.animationPlayState = 'running';
					}
				});
			}, { threshold: 0.1 });
		
			cards.forEach(card => {
				observer.observe(card);
			});
		});
	document.addEventListener('DOMContentLoaded', function() {
			const text = "Become A Member Today!";
			const speed = 100; // Typing speed in milliseconds
		
			function typeWriter() {
				const container = document.getElementById('typewriter-text3');
				let i = 0;
		
				function type() {
				if (i < text.length) {
					container.textContent += text.charAt(i);
					i++;
					setTimeout(type, speed);
				}
				}
		
				type();
			}
		
			typeWriter();
			});
			document.addEventListener('DOMContentLoaded', function() {
				const text = "Our Mission";
				const speed = 100; // Typing speed in milliseconds
			
				function typeWriter() {
					const container = document.getElementById('typewriter-text4');
					let i = 0;
			
					function type() {
					if (i < text.length) {
						container.textContent += text.charAt(i);
						i++;
						setTimeout(type, speed);
					}
					}
			
					type();
				}
			
				typeWriter();
				});
				document.addEventListener('DOMContentLoaded', function() {
					const text = "Upcoming Events";
					const speed = 100; // Typing speed in milliseconds
				
					function typeWriter() {
						const container = document.getElementById('typewriter-text5');
						let i = 0;
				
						function type() {
						if (i < text.length) {
							container.textContent += text.charAt(i);
							i++;
							setTimeout(type, speed);
						}
						}
				
						type();
					}
				
					typeWriter();
					});
					document.addEventListener('DOMContentLoaded', function() {
						const text = "Gallery";
						const speed = 100; // Typing speed in milliseconds
					
						function typeWriter() {
							const container = document.getElementById('typewriter-text7');
							let i = 0;
					
							function type() {
							if (i < text.length) {
								container.textContent += text.charAt(i);
								i++;
								setTimeout(type, speed);
							}
							}
					
							type();
						}
					
						typeWriter();
						});
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

				$(document).on("scroll", function() {
					var pageTop = $(document).scrollTop();
					var pageBottom = pageTop + $(window).height();
					var tags = $(".popup");
				  
					for (var i = 0; i < tags.length; i++) {
					  var tag = tags[i];
					  if ($(tag).position().top < pageBottom) {
						$(tag).addClass("visible");
					  } else {
						$(tag).removeClass("visible");
					  }
					}
				  });

})(jQuery);

