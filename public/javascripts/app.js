var tStart = 30 // Start transition 100px from top
		, tEnd = 500   // End at 500px
		, cStart = [30, 30, 30]
		, cEnd = [255, 255, 255]
		, cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];

	$(document).ready(function(){
		$(document).scroll(function() {
			var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
			p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
			var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
			$("#body").css('background-color', 'rgb(' + cBg.join(',') +')');
		});
	});

	var tStart2 = 30 // Start transition 100px from top
		, tEnd2 = 500   // End at 500px
		, cStart2 = [255, 255, 255]
		, cEnd2 = [0, 0, 0]
		, cDiff2 = [cEnd2[0] - cStart2[0], cEnd2[1] - cStart2[1], cEnd2[1] - cStart2[0]];

		$(document).scroll(function() {
			var p = ($(this).scrollTop() - tStart2) / (tEnd2 - tStart2); // % of transition
			p2 = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
			var cBg2 = [Math.round(cStart2[0] + cDiff2[0] * p2), Math.round(cStart2[1] + cDiff2[1] * p2), Math.round(cStart2[2] + cDiff2[2] * p2)];
			$(".font_color").css('color', 'rgb(' + cBg2.join(',') +')');
		});

			var p = ($(this).scrollTop() - tStart2) / (tEnd2 - tStart2); // % of transition
			p2 = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
			var cBg2 = [Math.round(cStart2[0] + cDiff2[0] * p2), Math.round(cStart2[1] + cDiff2[1] * p2), Math.round(cStart2[2] + cDiff2[2] * p2)];
			$(".font_color").css('color', 'rgb(' + cBg2.join(',') +')');

var $document = $(document),
		windowHeight = $(window).height(),
		windowWidth = $(window).width();

$(document).scroll(function() {
	  if ($document.scrollTop() >= (windowHeight * 0.8)) {
		// user scrolled 50 pixels or more;
		$(".navi_fade").fadeIn(700);
	  }
	  else {
		 $(".navi_fade").fadeOut(300);
	  }
});

$(window).scroll(function() {

 if ($(this).scrollTop()>400)
  {
     $('.work_link').fadeOut();
     $('.about_link').fadeOut();
     $('.contact_link').fadeOut();
  }
 else
  {
    $('.work_link').fadeIn();
    $('.about_link').fadeIn();
    $('.contact_link').fadeIn();
  }
});

$(document).ready(function() {
	$(".scroll").click(function(event){
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
	});
});
