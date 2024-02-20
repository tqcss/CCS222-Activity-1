const hero = document.querySelector(".hero");
const moveSpeed = 0.19;

let xValue = 0;
let yValue = 0;

window.addEventListener("mousemove", (event) => {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;
    // console.log(xValue, yValue);

    hero.style.transform = `translateX(calc(-50% - ${xValue * moveSpeed}px)) translateY(calc(-50% - ${yValue * moveSpeed}px))`;
})