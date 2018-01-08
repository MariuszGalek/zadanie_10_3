$(function(){
});

var carouselList = $("#carousel ul");
setInterval(moveSlide, 3000)

function moveSlide() {
	carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
	}

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({
		marginLeft: 0
	});
}