const createIntersectionObserver = (className, animationClass) => {
    return new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            }
        });
    }, { threshold: 1 });
};

const observerRight = createIntersectionObserver(".anim-right", "play-right");
const hiddenElementsRight = document.querySelectorAll(".anim-right");
hiddenElementsRight.forEach(element => observerRight.observe(element));

const observerLeft = createIntersectionObserver(".anim-left", "play-left");
const hiddenElementsLeft = document.querySelectorAll(".anim-left");
hiddenElementsLeft.forEach(element => observerLeft.observe(element));

const hero = document.querySelector(".hero");
const moveSpeed = 0.19;

let xValue = 0;
let yValue = 0;

window.addEventListener("mousemove", event => {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;

    hero.style.transform = `translateX(calc(-50% - ${xValue * moveSpeed}px)) translateY(calc(-50% - ${yValue * moveSpeed}px))`;
});

window.onscroll = function() {
    toggleScrollTopButton();
};

function toggleScrollTopButton() {
    var btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}