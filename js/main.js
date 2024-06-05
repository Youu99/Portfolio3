// 타이틀 타이핑

const texts = ["WELCOME", "YOUMIN", "PORTFOLIO"];
let index = 0;
let charIndex = 0;
const typingSpeed = 200;
const erasingSpeed = 100;
const delayBetweenTexts = 2000;

const scTag = document.getElementById("sc_tag");

function type() {
  if (charIndex < texts[index].length) {
    scTag.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    scTag.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, delayBetweenTexts);
});


// 카드회전

document.addEventListener('DOMContentLoaded', function () {
  const profileCard = document.getElementById('profil_card');
  const container = document.createElement('div');
  container.classList.add('container');

  profileCard.parentNode.insertBefore(container, profileCard);
  container.appendChild(profileCard);
  container.appendChild(document.getElementById('profil_card2'));

  profileCard.addEventListener('mouseenter', function () {
    container.classList.add('flipped');
  });

  container.addEventListener('mouseleave', function () {
    container.classList.remove('flipped');
  });
});



// 바텀 메뉴 체인지
document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll('#hea_u li');
  
  buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      // 모든 섹션을 숨깁니다.
      document.querySelectorAll('.sc').forEach(function(section) {
        section.style.display = 'none';
      });

      // 클릭된 버튼에 해당하는 섹션을 보여줍니다.
      var sectionToShow = document.querySelector('.sc' + (index + 1));
      if(sectionToShow) {
        sectionToShow.style.display = 'block'; // 먼저 요소를 표시합니다.
        // fadeIn 애니메이션 클래스를 추가합니다.
        sectionToShow.classList.add('fadeIn'); 
      }
    });
  });
});


// 카드 스와이퍼


document.addEventListener('DOMContentLoaded', function() {
  var swiperCard = new Swiper('.swiper-card', {
    effect: 'cards', // 'cards' 효과 사용
    grabCursor: true,
    loop: false, // 루프 설정을 false로 변경하여 슬라이드가 처음으로 돌아가지 않도록 설정
    cardsEffect: {
      slideShadows: true, // 슬라이드 그림자
    },
    on: {
      init: function () {
        // 초기화 시 첫 번째 ex_box만 보이도록 설정
        displayExBox(0);
      },
      slideChange: function () {
        // 슬라이드가 변경될 때 마다 실행
        displayExBox(this.activeIndex);
      }
    }
  });
});

function displayExBox(index) {
  var exBoxes = document.querySelectorAll('.ex_box');
  // 모든 ex_box를 숨김
  exBoxes.forEach(function(box) {
    box.style.display = 'none';
  });
  // 현재 활성화된 슬라이드에 해당하는 ex_box만 보이도록 설정
  exBoxes[index].style.display = 'block';
}


//이미지 애니메이션
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.swiper-slide');

  slides.forEach(slide => {
      let img = slide.querySelector('img');
      let moved = false; // 이미지가 내려갔는지 상태를 추적하는 변수입니다.

      img.addEventListener('click', function() {
          if (!moved) { // 이미지가 원위치에 있을 때만 작동합니다.
              let slideHeight = slide.clientHeight;
              let imgHeight = img.offsetHeight;
              let moveDistance = imgHeight - slideHeight; // 움직일 거리를 계산합니다.

              if (moveDistance > 0) {
                  img.style.transform = `translateY(-${moveDistance}px)`;
                  moved = true; // 이미지가 내려간 상태로 변경합니다.

                  // 일정 시간 후 이미지를 원위치로 돌려놓습니다.
                  setTimeout(() => {
                      img.style.transform = 'translateY(0)';
                      moved = false; // 이미지 상태를 원위치로 변경합니다.
                  }, 7000); // 여기서는 3초 후에 실행됩니다. 필요에 따라 조정 가능합니다.
              }
          }
      });
  });
});

//마지막 자기소개 슬라이드

const contentCon = document.getElementById('content_con');

document.getElementById('concluson_img').addEventListener('mouseenter', function() {
    contentCon.style.transition = 'transform 18s ease'; // 
    contentCon.style.transform = 'translateY(-67%)';
});

document.getElementById('concluson_img').addEventListener('mouseleave', function() {
    contentCon.style.transition = 'transform 5s ease'; // 
    contentCon.style.transform = 'translateY(0)'; // 
});