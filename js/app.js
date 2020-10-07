$(function(){

  // menu の background-color を操作 --------------------------------
  var targetHeight = $('.js-float-menu-target').height();
 
  $(window).on('scroll', function(){
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  });
  
  // ハンバーガーメニュークリック時、activeクラスをトグルすることでcssと連動。ハンバーガーメニューがバツになる、メニューが横からスライドして出てくる
  $('.c-menu-trigger').on('click', function(){
    $(this).toggleClass('active');      // ハンバーガーメニューのアニメーション
    $('.c-menu__nav').toggleClass('active');    // menu が横からスライドしてくる
  });

  // 携帯用の menu のリンクをクリックすると menu が閉じる ----------------
  $('.menu-link').on('click', function(){
    $('.c-menu-trigger').toggleClass('active');
    $('.c-menu__nav').toggleClass('active');
  });

  // アコーディオン -------------------------------------------------
  $('.c-accordion-item').on('click', function(){

    var $answer =  $(this).find('.c-accordion-item__answer');
    
    $answer.slideToggle();   // slideToggle() 関数でDOMをスライド

    $($answer).toggleClass('active'); // active クラスをトグルして、ヘッダーにスタイルを付ける

    if($answer.hasClass('active')){
      $(this).find('.c-accordion-item__question').attr('style', 'color:#fbd46d;')
    }else{
      $(this).find('.c-accordion-item__question').attr('style', 'color:#666;')
    }

  });

  // モーダルの実装 ----------------------------------------------
  $('.c-panel__container').on('click', function(){

    var $img = $(this).find('img');   // クリックされたパネルのimg要素を取得し、変数に代入
    var srcClicked = $img.attr('src');      // そのimg要素のsrcを取得し、変数に代入

    $('.js-show-modal-target').find('img').attr('src', srcClicked); // モーダルのimg要素のsrcを先に取得した変数に変更

    console.log(srcClicked);

    $('.js-show-modal-cover').fadeIn();
    $('.js-show-modal-target').fadeIn();

    $('.cover').on('click',function(){
      
      $('.js-show-modal-cover').hide();
      $('.js-show-modal-target').hide();
    });

    $('.js-show-modal-target').on('click', function(){  // パネル部分がクリックされても閉じないようにしている
      $('.js-show-modal-target').show();    
    });
   
  });

  // スライダーの実装 ------------------------------------------------
  var sliderWidth = $('.c-slider').innerWidth();
  var sliderHeight = $('.c-slider').innerHeight();

  console.log('sliderWidth ' + sliderWidth);
  console.log('sliderWidth ' + sliderHeight);

  $('.slider__item').attr('style', 'width:'+sliderWidth+'px');
  $('.slider__item').attr('style', 'height:'+sliderHeight+'px');

  console.log($('.slider__item').innerWidth());
  console.log($('.slider__item').innerHeight());

  var currentSlideNum = 1;
  var $slideContainer = $('.slider-container');
  var slideNum = $('.slider__item').length;
  var slideHeight = $('.slider__item').innerHeight();
  var slideContainerWidth = slideNum * slideHeight;
  
  console.log(slideNum);
  console.log(slideHeight);
  console.log(slideContainerWidth);

  $slideContainer.attr('style', 'height:'+slideContainerWidth + 'px');

  console.log($slideContainer.attr('style'));

  $('.fa-caret-down').on('click', function(){
    if(currentSlideNum < slideNum){
      $slideContainer.animate({top: '-='+ slideHeight +'px'}, 1000);
      currentSlideNum++;
    }
  });

  $('.fa-caret-up').on('click', function(){
    if(currentSlideNum > 1){
      $slideContainer.animate({top: '+='+ slideHeight +'px'}, 1000);
      currentSlideNum--;
    }
  });

  // var sliderWidth = $('.c-modal__slider').innerWidth();
  // var sliderHeight = $('.c-modal__slider').innerHeight();

  // console.log('sliderWidth ' + sliderWidth);
  // console.log('sliderWidth ' + sliderHeight);

  // $('.slide').attr('style', 'width:' +sliderWidth+'px');
  // $('.slide').attr('style', 'height:'+sliderHeight+'px');

  // console.log($('.slide').innerWidth());
  // console.log($('.slide').innerHeight());

  // var currentSlideNum = 1;
  // var $slideContainer = $('.slide__container');
  // var slideNum = $('.slide').length;
  // var slideHeight = $('.slide').innerHeight();
  // var slideContainerWidth = slideNum * slideHeight;
  
  // console.log(slideNum);
  // console.log(slideHeight);
  // console.log(slideContainerWidth);

  // $slideContainer.attr('style', 'height:'+slideContainerWidth + 'px');

  // console.log($slideContainer.attr('style'));

  // $('.slide').on('click', function(){
  //   if(currentSlideNum < slideNum){
  //     $slideContainer.animate({top: '-='+ slideHeight +'px'}, 500);
  //     currentSlideNum++;
  //   }
  // });
});