// hiraku
$(".offcanvas-right").hiraku({
    btn:".offcanvas-btn-right",
    direction:"right"
});

//slider
$('.results-sliders').slick({
    arrows: false,
    infinite: true, //スライドのループ有効化
    dots:true, //ドットのナビゲーションを表示
    centerMode: true, //要素を中央寄せ
    centerPadding:'350px', //両サイドの見えている部分のサイズ
    autoplay:true, //自動再生
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
