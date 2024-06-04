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
  // 'hea_u' 아이디를 가진 요소의 모든 'li' 자식 요소들을 찾습니다.
  var buttons = document.querySelectorAll('#hea_u li');
  
  buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      // 모든 섹션을 숨깁니다.
      document.querySelectorAll('.sc').forEach(function(section) {
        section.style.display = 'none';
      });
      
      // 클릭한 버튼에 해당하는 섹션만 보여줍니다. (인덱스는 0부터 시작하므로 1을 더합니다)
      var sectionToShow = document.querySelector('.sc' + (index + 1));
      if(sectionToShow) {
        sectionToShow.style.display = 'block';
      }
    });
  });
});
