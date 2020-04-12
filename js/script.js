// hiraku
$(".offcanvas-right").hiraku({
    btn:".offcanvas-btn-right",
    direction:"right"
});

$('a[href^="#"]').click(function() {

    // 画面のロックを解除する
    $('body').css('position', 'static');
    $('body').css('overflow', 'scroll');
    $('body').css('overflow-y', 'scroll');

    // メニューを閉じる
    $('.js-hiraku-offcanvas-open').hide();
    $('.js-hiraku-offcanvas-body-right').removeAttr('style');

    // ヘッダーの表示を切り替える
    $('header').removeAttr('style');
    $('.hiraku-open-btn').removeAttr('style');
    $('.open-btn').show();
    $('.close-btn').hide();

    // classを初期化する
    $('body').removeClass('js-hiraku-offcanvas-body-right');
    $('.hiraku-open-btn').removeClass('js-hiraku-offcanvas-btn-active');
    $('.hiraku-open-btn').attr({'aria-expanded' : 'false'});
    $('.js-hiraku-offcanvas').removeClass('js-hiraku-offcanvas-open');
    $('.js-hiraku-offcanvas-sidebar').removeClass('active');

    // styleを初期化
    $('html').removeAttr('style');
    $('body').removeAttr('style');
    $('header').removeAttr('style');
    // $('.hiraku-open-btn').removeAttr('style');
    $('.close-btn').removeAttr('style');
    $('.js-hiraku-offcanvas').removeAttr('style');
  });

//slider
$('.results-sliders').slick({
    arrows: false,
    infinite: true, //スライドのループ有効化
    dots:true, //ドットのナビゲーションを表示
    autoplay:true, //自動再生
    slidesToShow: 1
});

// Wow
new WOW().init();

// Smooth Scroll
$(function(){
    $('a[href^="#"]').click(function(){
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

// accordion
$(function(){
	$('.ac').click(function(){
        $(this).next('ul').slideToggle();
        $(this).find('.line2').toggleClass('open');
        $(this).toggleClass('open');
	});
});
