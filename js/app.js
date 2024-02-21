// Function to create Intersection Observer for animations
const createIntersectionObserver = (className, animationClass) => {
    return new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            } else {
                entry.target.classList.remove(animationClass);
            }
        });
    }, { threshold: 1 });
};

// Observer for elements with the "anim-right" class
const observerRight = createIntersectionObserver(".anim-right", "play-right");
const hiddenElementsRight = document.querySelectorAll(".anim-right");
hiddenElementsRight.forEach(element => observerRight.observe(element));

// Observer for elements with the "anim-left" class
const observerLeft = createIntersectionObserver(".anim-left", "play-left");
const hiddenElementsLeft = document.querySelectorAll(".anim-left");
hiddenElementsLeft.forEach(element => observerLeft.observe(element));

const hero = document.querySelector(".hero");
const moveSpeed = 0.19;


// Hero Image interactivity
let xValue = 0;
let yValue = 0;

window.addEventListener("mousemove", (event) => {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;
    // console.log(xValue, yValue);

    hero.style.transform = `translateX(calc(-50% - ${xValue * moveSpeed}px)) translateY(calc(-50% - ${yValue * moveSpeed}px))`;
})
