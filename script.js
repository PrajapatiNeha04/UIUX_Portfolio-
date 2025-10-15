const texts = [
  "a Web Developer",
  "a Web Designer",
  "an UI/UX Student",
  "a Content writer",
  "a Fiction Writer"
];

let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 80;
const delayBetweenWords = 1200;

function typeEffect() {
  currentText = texts[count];
  
  if (isDeleting) {
    index--;
  } else {
    index++;
  }

  document.querySelector(".typing-text").textContent = currentText.substring(0, index);

  if (!isDeleting && index === currentText.length) {
    // Pause when finished typing
    setTimeout(() => isDeleting = true, delayBetweenWords);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", typeEffect);


