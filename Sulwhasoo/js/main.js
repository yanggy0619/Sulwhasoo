$(document).ready(function () {

  //Hyundai N Festival 배경이미지 크기 제어 : 200% 에서 100%로 
  var $cnt5 = $('#cnt5');
  var cnt5posY = $cnt5.offset().top;  //$cnt5의 Y 좌표위치
  var widthScale = 200;  //로딩시 시작 크기 2배
  //console.log(cnt5posY);

  $(window).on('scroll', function () {
    var scrollY = $(this).scrollTop();
    console.log(scrollY);

    //#cnt5 - 스크롤 움직인 거리를 %로 변환해서 전체 크기 2배에서 빼주면 현재의 비율이 나온다
    if (scrollY < cnt5posY) {
      widthScale = 200 - (scrollY / cnt5posY * 100);
      console.log(widthScale);
      $('.nFestival_bg').css('width', widthScale + '%');
    }

    // 여기부터 컨텐츠 스크롤에 나타나기
    /* https://greensock.com/tweenmax/
      TweenMax.to('html, body', 1, {scrollTop: 200, ease:Power1.easeOut});
      첫 번째 파라미터는 트윈 할 대상(Target)입니다. 
      두 번째 파라미터는 초 단위의 지속시간(duration), 
      세 번째는 속성(Properties)인데, 대상이 기존에 가지고 있던 속성 값과는 다른, 변화 된 값(End values)이어야 합니다. */
  
    if($(window).scrollTop() > $("#cnt2").offset().top - 500){
      gsap.to('#cnt2.inner .tit_top', {delay:0, top:0, opacity:1, duration: 0.5,  ease:Power3.easeOut});
      gsap.to('#cnt2 .inner .tit', {delay: 0.2, top: 0, opacity: 1, duration: 0.5, ease:Power3.easeOut});
      gsap.to('#cnt2 .inner .txt', {delay:0.3, top:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
      gsap.to('#cnt2 .btn_more', {delay:0.4, top:0, opacity:1, duration: 0.5, ease:Power3.easeOut});

      // TweenMax.to($("#cnt2 .inner .tit_top"), 0.5, {delay:0, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt2 .inner .tit"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt2 .inner .txt"), 0.5, {delay:0.3, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt2 .btn_more"), 0.5, {delay:0.4, top:0, opacity:1, ease:Power3.easeOut});
    };
  
     if($(window).scrollTop() > $("#cnt3").offset().top - 500){
      gsap.to('#cnt3 .inner .tit_top', {delay:0, top:0, opacity:1, duration:0.5, ease:Power3.easeOut});
      gsap.to('#cnt3 .inner .tit', {delay:0.2, top:0, opacity:1, duration:0.5, ease:Power3.easeOut});
      gsap.to('#cnt3 .inner .txt', {delay:0.3, top:0, opacity:1, duration:0.5, ease:Power3.easeOut});
      gsap.to('#cnt3 .academy_list li:nth-child(1)', {delay:0.5, top:0, opacity:1, duration:0.5, ease:Power3.easeOut});
      gsap.to('#cnt3 .academy_list li:nth-child(2)', {delay:0.8, top:0, opacity:1, duration:0.5, ease:Power3.easeOut});
      gsap.to('#cnt3 .academy_list li:nth-child(3)', {delay:1.1, top:0, opacity:1, duration:0.5, ease:Power3.easeOut});

    //   TweenMax.to($("#cnt3 .inner .tit_top"), 0.5, {delay:0, top:0, opacity:1, ease:Power3.easeOut});
    //   TweenMax.to($("#cnt3 .inner .tit"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power3.easeOut});
    //   TweenMax.to($("#cnt3 .inner .txt"), 0.5, {delay:0.3, top:0, opacity:1, ease:Power3.easeOut});
    //   TweenMax.to($("#cnt3 .academy_list li:nth-child(1)"), 0.5, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut});
    //   TweenMax.to($("#cnt3 .academy_list li:nth-child(2)"), 0.5, {delay:0.8, top:0, opacity:1, ease:Power3.easeOut});
    //   TweenMax.to($("#cnt3 .academy_list li:nth-child(3)"), 0.5, {delay:1.1, top:0, opacity:1, ease:Power3.easeOut});
    };
  
    if($(window).scrollTop() > $("#cnt4").offset().top - 500){
      gsap.to('#cnt4 .inner .tit_top', {delay:0, top:0, opacity:1, duration:1, ease:Power3.easeOut});
      gsap.to('#cnt4 .inner .tit', {delay:0.2, top:0, opacity:1, duration:1, ease:Power3.easeOut});
      gsap.to('#cnt4 .inner .txt', {delay:0.3, top:0, opacity:1, duration:1, ease:Power3.easeOut});
      gsap.to('#cnt4 .pleasure_list li:nth-child(1)', {delay:0.5, top:0, opacity:1, duration:1, ease:Power3.easeOut});
      gsap.to('#cnt4 .pleasure_list li:nth-child(2)', {delay:0.8, top:0, opacity:1, duration:1, ease:Power3.easeOut});
      gsap.to('#cnt4 .pleasure_list li:nth-child(3)', {delay:1.1, top:0, opacity:1, duration:1, ease:Power3.easeOut});
      gsap.to('#cnt4 .pleasure_list li:nth-child(4)', {delay:1.4, top:0, opacity:1, duration:1, ease:Power3.easeOut});

      // TweenMax.to($("#cnt4 .inner .tit_top"), 0.5, {delay:0, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt4 .inner .tit"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt4 .inner .txt"), 0.5, {delay:0.3, top:0, opacity:1, ease:Power3.easeOut});

      // TweenMax.to($("#cnt4 .pleasure_list li:nth-child(1)"), 1, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt4 .pleasure_list li:nth-child(2)"), 1, {delay:0.8, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt4 .pleasure_list li:nth-child(3)"), 1, {delay:1.1, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt4 .pleasure_list li:nth-child(4)"), 1, {delay:1.4, top:0, opacity:1, ease:Power3.easeOut});
    }
 
    if($(window).scrollTop() > $("#cnt5").offset().top - 500){
      gsap.to('#cnt5 .inner .tit_top', {delay:0, top:0, opacity:1, duration: 0.5,  ease:Power3.easeOut});
      gsap.to('#cnt5 .inner .tit', {delay: 0.2, top: 0, opacity: 1, duration: 0.5, ease:Power3.easeOut});
      gsap.to('#cnt5 .inner .txt', {delay:0.3, top:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
      gsap.to('#cnt5 .btn_more', {delay:0.4, top:0, opacity:1, duration: 0.5, ease:Power3.easeOut});

      // TweenMax.to($("#cnt5 .inner .tit_top"), 0.5, {delay:0, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt5 .inner .tit"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt5 .inner .txt"), 0.5, {delay:0.3, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt5 .btn_more"), 0.5, {delay:0.4, top:0, opacity:1, ease:Power3.easeOut});
    };
    
    if($(window).scrollTop() > $("#cnt6").offset().top - 400){
      gsap.to('#cnt6 .inner .tit', {delay:0, top:0, opacity:1, duration: 0.5,  ease:Power3.easeOut});
      gsap.to('#cnt6 .btn_more', {delay: 0.4, top: 0, opacity: 1, duration: 0.5, ease:Power3.easeOut});
      gsap.to('#cnt6 .sns_list', {delay:0.6, top:0, opacity:1, duration: 0.5, ease:Power3.easeOut});

      // TweenMax.to($("#cnt6 .inner .tit"), 0.5, {delay:0, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt6 .btn_more"), 0.5, {delay:0.4, top:0, opacity:1, ease:Power3.easeOut});
      // TweenMax.to($("#cnt6 .sns_list"), 0.5, {delay:0.6, top:0, opacity:1, ease:Power3.easeOut});
    };

  });

});