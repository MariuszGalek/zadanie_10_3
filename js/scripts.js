$(function(){

	var carouselList = $("#carousel ul");
	
	function defaultInterval() {
		startInterval = setInterval(nextSlide, 3000);
	}
	defaultInterval();

	function nextSlide() {
		carouselList.animate({
			'marginLeft':-600
		}, 500, moveFirstSlide);
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		var activeItem = carouselList.find('li:first');
		$('.fa-circle:eq('+ firstItem.attr('id') + ')').css("color", "white");
		$('.fa-circle:eq('+ activeItem.attr('id') + ')').css("color", "red");
		carouselList.css({
			marginLeft: 0
		});
	}

	$("#right").click(function() {	
		clearInterval(startInterval);
		nextSlide();
		defaultInterval();
	});

	$("#left").click(previousSlide);
	
	function previousSlide() {
		clearInterval(startInterval);
		moveFirstSlideBack();
		carouselList.animate({
			'marginLeft': 0
		}, 500, defaultInterval);
	}

	function moveFirstSlideBack() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		var activeItem = carouselList.find('li:first');
		$('.fa-circle:eq('+ firstItem.attr('id') + ')').css("color", "white");
		$('.fa-circle:eq('+ activeItem.attr('id') + ')').css("color", "red");
		carouselList.css({
			marginLeft: -600
		});
	}
});