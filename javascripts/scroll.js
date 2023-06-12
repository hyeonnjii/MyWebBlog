// -----스크롤 하단 기능-------
// 스크롤 다운할 목적지를 인자로 받아 해당 위치의 제일 윗 부분의 위치로 scroll 하도록 설정
function scrollDown(sectionId) {
  const sectionOffset = $(sectionId).offset().top;
  $("html, body").animate({ scrollTop: sectionOffset }, 800);
}

$(document).ready(function () {
  $(".btn-scroll-down").on("click", function () {
    if ($(this).closest("#main-header-button").length) {
      // 첫 번째 버튼을 클릭한 경우(main-header > self-intro article)
      // 해당 버튼의 조상의 유뮤를 판단, 해당 요소가 있는지 판단

      scrollDown("#selfIntro-article");
    } else if ($(this).closest(".main-section-article-button").length) {
      // 두 번째 버튼을 클릭한 경우(self-intro article > motivation article)
      scrollDown("#motivation-article");
    }
  });

  $(".btn-scroll-down").hover(
    function () {
      $(this).css("cursor", "pointer");
    },
    function () {
      $(this).css("cursor", "");
    }
  );
});

// ----스크롤 좌우 기능-----
// mainIntro.html의 selfIntro-article안의 요소인 .self-intro-imgs-list의 너비를 기준으로
// 해당 너비 만큼 스크롤 될 수 있도록 함수 정의
function scrollLeft() {
  var container = $(".self-intro-imgs-list");
  var scrollPosition = container.scrollLeft();
  var width = container.width();
  container.animate({ scrollLeft: scrollPosition - width }, 500);
}

function scrollRight() {
  var container = $(".self-intro-imgs-list");
  var scrollPosition = container.scrollLeft();
  var width = container.width();
  container.animate({ scrollLeft: scrollPosition + width }, 500);
}

$(document).ready(function () {
  $(".btn-scroll-left").hover(
    function () {
      $(this).css("background-color", "#90a2cf");
      $(".left").css("border-color", "white");
    },
    function () {
      $(this).css("background-color", "");
      $(".left").css("border-color", "");
    }
  );

  // hover 시 동적으로 css 설정 변경 가능
  $(".btn-scroll-right").hover(
    function () {
      $(this).css("background-color", "#90a2cf");
      $(".right").css("border-color", "white");
    },
    function () {
      $(this).css("background-color", "");
      $(".right").css("border-color", "");
    }
  );

  $(".btn-scroll-left").on("click", function () {
    scrollLeft();
  });

  $(".btn-scroll-right").on("click", function () {
    scrollRight();
  });
});
