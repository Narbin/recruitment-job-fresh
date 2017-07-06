$(function() {
	var menu = $(".header"), 
		objWindow = $(window),
		offset = menu.offset();

	objWindow.scroll(function() {
		if (objWindow.scrollTop() > offset.top) {
			menu.stop().animate({
				opacity: 0
			});
		} else {
			menu.stop().animate({
				opacity: 1
			});
		}
	});
});