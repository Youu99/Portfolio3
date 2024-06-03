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