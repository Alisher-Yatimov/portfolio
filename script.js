const mainSection = document.querySelector("main");
const background = document.querySelector(".background");
const skillsWrapper = document.querySelector(".skills-wrapper");
const skills = document.querySelectorAll(".skill");
const burgerBtn = document.querySelector(".burger-btn");
const navigationMenu = document.querySelector(".navigation");

const offset = 250;
const skillsOffset = 50;

const pageX = mainSection.clientWidth / 2;
const pageY = mainSection.clientHeight / 2;

mainSection.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const offsetX = x - pageX;
  const offsetY = y - pageY;
  const isNegativeX = offsetX / Math.abs(offsetX);
  const isNegativeY = offsetY / Math.abs(offsetY);
  background.style.transform = `translate(${
    Math.abs(offsetX) > offset ? isNegativeX * offset : offsetX
  }px, ${Math.abs(offsetY) > offset ? isNegativeY * offset : offsetY}px)`;
});

setInterval(() => {
  skills.forEach((skill) => {
    const x = generateRandom(-100, 100);
    const y = generateRandom(-100, 100);
    const z = generateRandom(-100, 100);
    skill.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  });
}, 2000);

const skillsWrapperStyles = getComputedStyle(skillsWrapper);
const skillsWrapperWidth = +skillsWrapperStyles.width.replace("px", "");
const skillsWrapperHeight = +skillsWrapperStyles.height.replace("px", "");

function generateRandom(min = 0, max = 100) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = rand * difference;

  // add with min value
  rand = rand + min;

  return rand;
}

burgerBtn.addEventListener("click", () => {
  if (navigationMenu.className.includes("active")) {
    navigationMenu.className = navigationMenu.className.replace(" active", "");
    burgerBtn.className = burgerBtn.className.replace(" active", "");
  } else {
    navigationMenu.className += " active";
    burgerBtn.className += " active";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    new Array(3).fill(1).forEach(() => {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = generateRandom(-800, 0) + "px";
      star.style.left = generateRandom(-800, 0) + "px";
      mainSection.append(star);
      const animationTime = generateRandom(2000, 4000)
      star.style.transition = `transform linear ${animationTime / 1000}s`
      star.style.transform = `translate(${mainSection.clientWidth + generateRandom(0, 800)}px, ${mainSection.clientHeight + generateRandom(0, 800)}px)`
      setTimeout(() => {
        star.remove();
      }, animationTime);
    });
  }, 3000);
});
