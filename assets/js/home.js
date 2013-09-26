$(document).ready(function() {	

	$('.fs1').delay(1000).fadeIn( 1000, function() {
		$('.fs2').typewrite({"delay":30 , "pause": 0, "callback" : function() {
			$('.fs3').typewrite({"delay":30, "pause":500, "callback" : function() {
				$(".fs4").typewrite({"delay":30, "pause": 700, "callback" : function() {
					$(".fs1").slideUp()
					$(".fs5").show().animate({fontSize : '250px' }, 400, function() {
						setTimeout(function() {
							$(".fs6").typewrite({"delay":30, "pause": 500, "callback" : function() {
								$(".fs2, .fs3").slideUp();
								$(".fs7").typewrite({"delay":30, "pause": 500, "callback" : function() {
									$(".fs4, .fs5").slideUp()
									$(".fs8").show().animate({fontSize: '225px'},400, function() {
										setTimeout(function() {
											$(".fs6").slideUp()
											$(".fs9").typewrite({"delay":30, "callback": function() {
												$(".fs10").typewrite({"delay":30, "callback" : function() {
													$("#arrow-down").fadeIn()
												}})
											}})
										}, 500)
									})
								}})
							}})
						}, 100)
					})
				}})
			}})
		}})
	})

	$("#arrow-down").click(function() {

	   var top = $('#main').position().top;
	   $('body').animate({scrollTop: top-100}, 800);

	})

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
		    $('#footer').stop().animate({ bottom: '0px' });
		} else {
		    $('#footer').stop().animate({ bottom: '-70px' });
		}
	});
	
})