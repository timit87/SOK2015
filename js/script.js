$(window).on('scroll', function() { //уменьшение b-header при вертикальном скролле
	if (window.scrollY > 200) {
		$('.fixed').slideDown(500);
	} else {
		$('.fixed').slideUp(500);
	}
});

$('.b-header').on('click','a', function () { // отслеживаем клик на все теги <a> внутри блока .b-header
	var $this = $(this), 
		top;
	if ($this.hasClass('b-header__logo')) { // клик на логотип
		top = 0;
	} else { // клик на остальные ссылки
		top = $($this.attr('href')).offset().top;
	}
	$('body,html').animate({scrollTop: top}, 200);
	
	return false;
});

$('.b-content-about-right-button').click(function(){
	$('.b-content-about-right-text').toggleClass('text-full');
});

$('.b-content-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 400,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false
});
$('.b-content-equipment-slider').slick({
  dots: true,
  arrows: true,
  infinite: false,
  slidesToShow: 3.5,
  slidesToScroll: 1
});
