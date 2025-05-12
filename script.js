const roles = ["programmer", "web developer", "UI/UX Designer"];
let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;
const typeSpeed = 150;
const eraseSpeed = 75;
const delayBetweenRoles = 1500;

const typewriter = document.getElementById('typewriter');

function type() {
  currentRole = roles[i];

  if (isDeleting) {
    typewriter.textContent = currentRole.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(type, 200);
    } else {
      setTimeout(type, eraseSpeed);
    }
  } else {
    typewriter.textContent = currentRole.substring(0, j++);
    if (j > currentRole.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenRoles);
    } else {
      setTimeout(type, typeSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typewriter) {
    type();
  }
});
