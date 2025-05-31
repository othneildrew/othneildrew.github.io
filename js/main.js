function openNav() {
  document.body.style.overflow = "hidden";
  document.querySelector("#menu").style.height = "100%";
}

function closeNav() {
  document.body.style.overflow = "auto";
  document.querySelector("#menu").style.height = "0%";
}

function registerEvents() {
  document.querySelector("#menu-btn").addEventListener("click", openNav);
  document.querySelector("#close-menu-btn").addEventListener("click", closeNav);
  document.querySelectorAll(".menu-link").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
}

function registerGSAPPlugins() {
  gsap.registerPlugin(
    MotionPathPlugin,
    MorphSVGPlugin,
    Observer,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    SplitText,
  );
}

function setupSmoothScroll() {
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
}

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    registerEvents();
    registerGSAPPlugins();
    setupSmoothScroll();
  });
})();
