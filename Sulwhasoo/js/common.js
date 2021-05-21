$(document).ready(function() {
    var $gnb = $('#gnb');

    // 전체 메뉴 여닫기
    $gnb.find('ul li ul').hide();   //gnb 뎁스2 ul 숨기고 시작

    $('#header .btn_nav').on('click', function () {
      var $first = $gnb.find('[data-link="first"]'); //gnb 에서 가장 처음 포커스를 가질 태그
      var $last = $gnb.find('[data-link="last"]');  //gnb 에서 가장 마지막으로 포커스를 가질 태그
      var $openbtn = $(this);  //메뉴 열기 버튼을 변수에 저장
  
      $('.gnb_dim').stop().fadeIn('fast');  //검정 dim마스크 나타나기
  
      // 네비게이션 left 좌표값 -300에서 0으로 애니메이션 되며 나타나기
      $gnb.css({visibility: 'visible'}).stop().animate({left: 0}, 300, function () {
        $first.focus();
        $('html').css({overflowY: 'hidden', height: '100%'});
      });
  
      // 메뉴 닫기를 선택하지 않았다면 탭을 누르는 경우 포커스가 메뉴 안에서만 회전되도록 제어
      $first.on('keydown', function (e) {
        if (e.shiftKey && e.keyCode == 9) {
          e.preventDefault();
          $last.focus();
        }
      });
      $last.on('keydown', function (e) {
        if (!e.shiftKey && e.keyCode == 9) {
          e.preventDefault();
          $first.focus();
        }
      });
  
      // 메뉴 닫기로 네비게이션 닫기기
      $gnb.find('.btn_navclose').on('click', function () {
        $('html').removeAttr('style');
        $('.gnb_dim').stop().fadeOut('fast');
        $gnb.stop().animate({left: -300}, 300, function () {
          $(this).css({visibility: 'hidden'}).find('ul li').removeClass('on').children('ul').stop().slideUp();
          $openbtn.focus();  //visibility: hidden된 닫기 버튼의 포커스를 열기 버튼으로 강제 이동시켜 주기
        });
      });

      return false;
    });
  
    // gnb a 클릭시 하위 depth 열리고 닫기
    $gnb.find('a').on('click', function () {
      if ($(this).next().size() == 0) {	//하위에 뎁스 ul이 없는 경우
        location.href=$(this).attr("href");
      }else {								//하위에 뎁스 ul이 있는 경우
        //초기화
        $(this).parent().siblings().removeClass('on').children('ul').stop().slideUp('fast');
        //현재설정
        $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
      }
  
      return false;
    });
    
  // 검색어 열기 버튼태그 클릭시
  $('#header .search').on('click', function () {
    //닫겨진 경우 -> 열기
    if ( !$(this).hasClass('on') ) {
        $(this).addClass('on').next().stop().slideDown('fast', function () {
          $(this).prev().children().attr('alt', '검색 닫기');
        });
    }
    //열려진 경우 -> 닫기
    else {
      $(this).removeClass('on').next().stop().slideUp('fast', function () {
        $(this).prev().children().attr('alt', '검색 열기');
      });
    }

    //검색창이 열린채로 포커스가 나가면 닫아주자
		$(this).on('keydown', function (e) {
      if (e.shiftKey && e.keyCode === 9) $(this).trigger('click');
    });
    $('.search_input button').on('keydown', function (e) {
      if ( !e.shiftKey && e.keyCode === 9 ) $('.search').trigger('click');
    });	
  });

  // top 이동 버튼
  $('.btn_top').on('click', function () {
    $("html, body").stop().animate({scrollTop: 0});
    $('.logo a').focus();

    return false;
  });
});