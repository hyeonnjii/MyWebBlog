// hover 여부에 따라 inner-menu가 펼쳐지거나/숨겨지는 기능
// : 해당 기능은 #main-navigation에서 적용되는 JQuery를 사용한 JS

$(document).ready(function () {
  $(".outer-menu-item").hover(
    // : outer-menu-item에 hover 시, inner-menu를 JQuery의 show() 함수로 보이게 하고,
    function () {
      $(this).find(".inner-menu").show();
    },
    // : 반대로 마우스가 벗어날 경우, inner-menu를 JQuery의 hide() 함수로 감춰지도록 설정
    function () {
      $(this).find(".inner-menu").hide();
    }
  );
});
