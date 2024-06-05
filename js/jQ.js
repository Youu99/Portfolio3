$(document).ready(function(){
  // 모든 skills_tab을 숨깁니다.
  $('.skills_tab').hide();
  // 첫 번째 tab을 기본적으로 표시합니다.
  $('.skills_tab').eq(0).show();

  $('#skills_menu_button li').click(function(){
    // 클릭된 li의 인덱스를 가져옵니다.
    var index = $(this).index();

    // 모든 tabs을 숨기고 선택된 인덱스에 해당하는 tab만 표시합니다.
    $('.skills_tab').hide();
    $('.skills_tab').eq(index).show();

    // li에 특별한 스타일을 적용하기 위해 먼저 모든 li의 스타일을 초기화합니다.
    $('#skills_menu_button li').css({
      backgroundImage: '',
      backgroundClip: '',
      WebkitBackgroundClip: '',
      WebkitTextFillColor: ''
    });

    // 클릭된 li에만 스타일을 적용합니다.
    $(this).css({
      backgroundImage: 'linear-gradient(-225deg, #561AD9 0%, #C394F2 25%, #8836BF 50%, #934EA6 75%, #F1C2F2 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    });
  });

  // 페이지 로드 시 첫 번째 li에 스타일을 적용합니다.
  $('#skills_menu_button li').eq(0).click();
});


