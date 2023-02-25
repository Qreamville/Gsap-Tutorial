import gsap from "gsap";

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const reverseBtn = document.getElementById("reverse");
const restartBtn = document.getElementById("restart");

let playAnimation = gsap.to(".img1", {
  x: 800,
  duration: 1,
  ease: "linear",
  paused: true,
});

playBtn.onclick = () => {
  playAnimation.play();
};

pauseBtn.onclick = () => {
  playAnimation.pause();
};

reverseBtn.onclick = () => {
  playAnimation.reverse();
};

restartBtn.onclick = () => {
  playAnimation.restart();
};
