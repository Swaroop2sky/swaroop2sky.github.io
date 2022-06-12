
var folder = "https://html5-templates.com/images/";	//change the image folder
/*
Name the image files 1.jpg, 2.jpg.... or adjust the script accordingly
*/
var counter = 3;
var loadingol = 0;
var kepid = "Kep;"
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {		// elerte az aljat
		loadImage(1);	
	}
});
$(document).ready(function(){
    $(".infinite-link").click(function(){
        loadImage(0);loadImage(0);loadImage(0);loadImage(0);
    });
	
	var isTouchDevice = 'ontouchstart' in document.documentElement;
	if (isTouchDevice) {
		$('#loading').hide();	
	} else {
		$('.wrap-infinite-link').hide();
	}
	
});
function loadImage(justone) {
	var imgstyle = "display: none;";
	if ((loadingol == 0) || (justone == 0)) {
		loadingol = 1;
		counter++;
		if (justone == 0) {	imgstyle = "";	}
		$( "#gallery" ).append( '<div>'+ counter +'.</div><img id="kep'+ counter +'" style="' + imgstyle + '" src="' + folder + counter +'.jpg" alt="" />' );

		 setTimeout(function () {
			kepid = '#kep'+ counter;
			$(kepid).fadeIn(300);
			loadingol = 0;
		 }, 300);

		preload([folder + (counter+1) +'.jpg']);
		preload([folder + (counter+2) +'.jpg']);
		preload([folder + (counter+3) +'.jpg']);
	}
}
	
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
 /*Scroll to top when arrow up clicked END*/
