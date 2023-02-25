import gsap from "gsap";

gsap.to(".img", { x: 400, y: 200, duration: 2, repeat: -1, yoyo: true });
gsap.to(".img2", { x: 400, y: 200, duration: 2, delay: 2 });
