

  $(document).ready(function() {
	$('.box').mousemove(function(event) {
		var boxWidth = $(this).outerWidth();
		var boxHeight = $(this).outerHeight();
		var boxCenterX = boxWidth / 2;
		var boxCenterY = boxHeight / 2;
		var mouseX = event.pageX - $(this).offset().left;
		var mouseY = event.pageY - $(this).offset().top;
		var rotateY = ((mouseX - boxCenterX) / boxWidth) * -30;
		var rotateX = ((mouseY - boxCenterY) / boxHeight) * 30;
		$(this).find('.img').css('transform', 'rotateY(' + rotateY + 'deg) rotateX(' + rotateX + 'deg)');
	  });


	  

	  

  });