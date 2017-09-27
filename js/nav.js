$(document).ready(function() {
	$('#open-menu, #close-menu').click(function() {
		$('nav').toggleClass('open');
		return false;
	});
	$('nav ul li a').click(function() {
		$('nav').toggleClass('open');
		var target = $(this.hash);
		$('html, body').animate({
	        'scrollTop': target.offset().top + 5
	    });
		return false;
	});
});

$(window).scroll(function() {
    var headerHeight = $('header').height() + 100;
    if ($(window).scrollTop() > headerHeight) {
        removeHeaderClasses();
    } else {
        addHeaderClasses();
    }
});

function removeHeaderClasses() {
    $('.header1').removeClass('slideDown');
    $('.header2').removeClass('expandUp');
    $('.header3').removeClass('pullUp');   
}

function addHeaderClasses() {
    $('.header1').addClass('slideDown');
    $('.header2').addClass('expandUp');
    $('.header3').addClass('pullUp');   
}