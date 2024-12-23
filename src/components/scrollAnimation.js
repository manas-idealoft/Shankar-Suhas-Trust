import gsap from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let building = document.getElementById("building");
let mainTl = gsap.timeline({
	defaults: {
		ease: "none",
		duration: 10,
	},
	scrollTrigger: {
		trigger: building,
		pin: true,
		scrub: 0.5,
		end: "1000",
	},
});
