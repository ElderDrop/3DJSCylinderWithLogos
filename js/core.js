$(document).ready(function() {
    if (!$.cookie('cookies')) {
        $('.cookie').show();
	}
	
    $("#ac").click(function() {
       $.cookie('cookies', 'ok', { expires: 7, path: '/' });
		$('.cookie').hide();
	});
	
	$(".cookie").click(function() {
	$.cookie('cookies', 'ok', { expires: 7, path: '/' });
		$('.cookie').hide();
	});
});

$('a').click(function(e) {
	$('html, body').animate({ scrollTop: $( $.attr(this, 'href') ).offset().top-$(".navbar").height()-20}, 500);		
	return false;
});

$('#col').click(function(e) {
	$(".navbar").toggleClass('navLO');
});

$(document).ready(function() {
	$('.parallax').each(function(i, obj) {
		url = "img/bg/";
		bgs = ["1.jpg"];
		
		w = Math.floor((Math.random() * bgs.length))
		
		url += bgs[w];
		
		$(obj).attr('data-parallax', 'scroll');
		$(obj).attr('data-image-src', url);
	});
});

$(document).ready(function() {
	window_height = $(window).height();
	window_width = $(window).width();
	if(window_height > 1200) window_height = 1000;
	$('.topPanel').css('height', window_height);
	
	ratio = 0.4;
	
	//console.log("Height: "+window_height+", Width: "+window_width);
	
	$('.carousel-inner > .item > img').css('height', window_width*ratio);
	$('.carousel .item').css('height', window_width*ratio);
	$('.carousel').css('height', window_width*ratio);
});

$(document).ready(function(){
	$('.anm').AniView();
});