// Slider Section
const slider = document.getElementById("slider");

function updateSliderPosition() {
  const scrollPosition = window.scrollY;
  const newPosition = Math.min(scrollPosition * 4, window.innerWidth / 2);
  slider.style.transform = `translateX(-${newPosition}px)`;
}

window.addEventListener("scroll", updateSliderPosition);
updateSliderPosition();

function animateSliderIn() {
  slider.classList.remove("hidden");
  setTimeout(() => {
    slider.style.transform = "translateX(0)";
  }, 100);
}

window.addEventListener("load", animateSliderIn);


// Menu Section
document.addEventListener("click", function (event) {
  const menuOptions = document.getElementById("menu-options");
  const menuIcon = document.querySelector(".menu-icon-container");

  if (menuOptions.style.display === "block" && event.target !== menuIcon) {
    menuOptions.style.display = "none";
    menuIcon.querySelector(".menu-icon").classList.remove("active");
  }
});

function toggleMenu() {
  const menuOptions = document.getElementById("menu-options");
  const menuIcon = document.querySelector(".menu-icon");

  if (menuOptions.style.display === "block") {
    menuOptions.style.display = "none";
    menuIcon.classList.remove("active");
  } else {
    menuIcon.classList.add("active");
    setTimeout(function () {
      menuOptions.style.display = "block";
    }, 260);
  }
}


// Project Visibility Section
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleProjectsVisibility() {
  const projects = document.querySelectorAll('.project');

  projects.forEach((project) => {
    if (isInViewport(project) && project.classList.contains('project-hidden')) {
      project.classList.remove('project-hidden');
      project.classList.add('project-visible');
    } else if (!isInViewport(project) && project.classList.contains('project-visible')) {
      project.classList.remove('project-visible');
      project.classList.add('project-hidden');
    }
  });
}

window.addEventListener('scroll', handleProjectsVisibility);
handleProjectsVisibility();


// Portfolio Title Section
const portfolioTitle = document.querySelector('.PortfolioTitle');

function handleScroll() {
  if (isInViewport(portfolioTitle)) {
    portfolioTitle.style.opacity = 1;
    portfolioTitle.style.transform = 'translateY(0)';
  } else {
    portfolioTitle.style.opacity = 0;
    portfolioTitle.style.transform = 'translateY(20px)';
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();


// Section Height Section
function setSectionHeight() {
  const section = document.querySelector("section");
  const container = document.querySelector(".sectainer");
  const contentHeight = container.offsetHeight;
  section.style.minHeight = contentHeight;
}

window.addEventListener("load", setSectionHeight);
window.addEventListener("resize", setSectionHeight);


// Initial Position Section
function setInitialPosition() {
  const bigTitle = document.querySelector('.BigTitle .text');
  const screenWidth = window.innerWidth;
  bigTitle.style.transform = `translateX(${screenWidth}px)`;
}

window.addEventListener('load', setInitialPosition);
window.addEventListener('resize', setInitialPosition);
