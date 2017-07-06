$(function() {
	var menu = $(".header"), 
		objWindow = $(window),
		offset = menu.offset(),
		oldPos = 0;
		
	objWindow.scroll(function() {
		var newPos = objWindow.scrollTop();
		if (oldPos < newPos) {
			oldPos = newPos;
			menu.stop().animate({
				opacity: 0
			});
		} else {
			oldPos = newPos;
			menu.stop().animate({
				opacity: 1
			});
		}
	});
});