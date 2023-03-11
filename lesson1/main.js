import gsap from "gsap";

// Tweens
// const playBtn = document.getElementById("play");
// const pauseBtn = document.getElementById("pause");
// const reverseBtn = document.getElementById("reverse");
// const restartBtn = document.getElementById("restart");

// let playAnimation = gsap.to(".img1", {
//   x: 500,
//   duration: 1,
//   ease: "linear",
//   paused: true,
// });

// playBtn.onclick = () => {
//   playAnimation.play();
// };

// pauseBtn.onclick = () => {
//   playAnimation.pause();
// };

// reverseBtn.onclick = () => {
//   playAnimation.reverse();
// };

// restartBtn.onclick = () => {
//   playAnimation.restart();
// };
gsap
  .timeline()
  .from("#app", { duration: 1, opacity: 0 })
  .from(".img h1", { opacity: 0, ease: "back" })
  .from(".img img", { y: 160, stagger: 0.1, duration: 0.8, ease: "back" })
  .from(".time", { xPercent: 100, duration: 0.2 });
