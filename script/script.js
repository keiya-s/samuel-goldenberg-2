$(function(){

  // $('.header-menu a').hover(
  //   function(){
  //     $(this).animate({
  //       'font-size':'20px'
  //     },50);
  //   },
  //   function(){
  //     $(this).animate({
  //       'font-size':'17px'
  //     },50);
  //   }
  // );



  // function toggleChangeBtn() {
  //     var slideIndex = $('.slide').index($('.active'));
  //     $('.change-btn').show();
  //     if (slideIndex == 0) {
  //       $('.prev-btn').hide();
  //     } else if (slideIndex == $('.slide').length - 1) {
  //       $('.next-btn').hide();
  //     }
  //   }
  //
  //   $('.index-btn').click(function() {
  //     $('.active').removeClass('active');
  //     var clickedIndex = $('.index-btn').index($(this));
  //     $('.slide').eq(clickedIndex).addClass('active');
  //     toggleChangeBtn();
  //   });
  //
  //   $('.change-btn').click(function() {
  //     var $displaySlide = $('.active');
  //     $displaySlide.removeClass('active');
  //     if ($(this).hasClass('next-btn')) {
  //       $displaySlide.next().addClass('active');
  //     } else {
  //       $displaySlide.prev().addClass('active');
  //     }
  //     toggleChangeBtn();
  //   });



  $(function() {
    var $allMsg = $('#title');
    var $wordList = $('#title').html().split("");
    $('#title').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 150);
        newEL.animate({ opacity: 1 }, 200);
    });
    $('#loading').delay(5000).slideUp(1000);
});


// if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){

$(function() {
  var $win = $(window)
      $header = $('header')
      $bandName = $('.band-name')
      $container = $('.header-container')
      $headerMenu = $('.header-menu')
  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 80 ) {
      $header.addClass('header-scroll');
      $container.addClass('container-scroll');
      $bandName.addClass('band-name-scroll');
      $headerMenu.addClass('header-menu-scroll');
    } else {
      $header.removeClass('header-scroll');
      $container.removeClass('container-scroll');
      $bandName.removeClass('band-name-scroll');
      $headerMenu.removeClass('header-menu-scroll');
    }
  });
});
// }




// menuのアコーディオン
  $('.menu-icon').click(function() {
    var $menu = $('.header-menu');
    if($menu.hasClass('open')) {
      $menu.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $menu.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください

    } else {
      $menu.addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $menu.slideDown();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください

    }
  });








  $(function(){
  $('.slides').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed:600,
    dots: true,
    infnite:true,
    centerMode:true,
    centerPadding:'100px',
  });
});






});
