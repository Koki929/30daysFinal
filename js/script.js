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