var Gallery = (function($) {

	var container = $("#gallery"),
		list = container.find("> ul").clone(true),
		images = container.find("a[href^='img/']"),
		imgBox,
		imgContainer,
		currentIndex,
		currentSrc,
		overlay;

	function init() {
		container.on("click", "a", onGalleryClick);
	}

	function onGalleryClick(e) {
		setGalleryData($(this));
		createOverlay();

		e.preventDefault();
	}

	function createOverlay() {
		overlay = $("<div/>", {
			"class" : "overlay"
		})
			.appendTo("body")
			.fadeIn("fast", buildImageBox)
			.on("click", removeOverlay);
	}

	function buildImageBox() {
		imgBox = $("<div/>", { "class" : "img-box" });

		$("<a/>", { "class" : "next-image", text : ">" }).appendTo(imgBox);

		imgContainer = $("<div/>", { "class" : "img-container" }).appendTo(imgBox);

		$("<a/>", { "class" : "prev-image", text : "<" }).appendTo(imgBox);

		imgBox.appendTo(overlay);
		overlay.append(list);
		setActiveListLink();
		loadImage();

		imgBox.on("click", "a", onImgBoxClick);
		list.on("click", "a", onListClick);
	}

	function onListClick(e) {
		setGalleryData($(this));
		setActiveListLink();
		loadImage();

		e.preventDefault();
	}

	function setGalleryData(element) {
		currentIndex = element.parent().index();
		currentSrc = images.eq(currentIndex).attr("href");
	}

	function setActiveListLink() {
		list
			.find(".active-img")
			.removeClass("active-img")
			.end()
			.find("li")
			.eq(currentIndex)
			.addClass("active-img");
	}

	function onImgBoxClick() {
		var $this = $(this);

		if($this.hasClass("next-image")) {
			currentIndex++;

			if(currentIndex > images.length - 1) {
				currentIndex = 0;
			}
		}

		if($this.hasClass("prev-image")) {
			currentIndex--;

			if(currentIndex < 0) {
				currentIndex = images.length - 1;
			}
		}

		currentSrc = images.eq(currentIndex).attr("href");
		setActiveListLink();
		loadImage();
	}

	function loadImage() {
		var image = $("<img/>", { src : currentSrc, alt : "" });

		imgContainer.empty();
		image.on("load", imageIsLoaded);
		
		function imageIsLoaded() {
			image
				.appendTo(imgContainer)
				.fadeIn(1000);
		}
	}

	function removeOverlay(e) {
		var $target = $(e.target);

		if($target.hasClass("overlay")) {
			overlay.fadeOut("fast", function() {
				overlay.remove();
			});
		}
	}

	return {
		init : init
	};

})(jQuery);

Gallery.init();