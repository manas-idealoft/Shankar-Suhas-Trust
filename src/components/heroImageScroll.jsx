import React from "react";

import {
	heroImage1,
	heroImage2,
	heroImage3,
	heroImage4,
	heroImage5,
	heroImage6,
	heroImage7,
} from "../assets";

const HeroImageScroll = () => {
	React.useEffect(() => {
		const scrollers = document.querySelectorAll(".scroller");

		const addAnimation = () => {
			scrollers.forEach((scroller) => {
				// Prevent multiple duplications
				if (scroller.getAttribute("data-animated")) return;

				scroller.setAttribute("data-animated", true);

				const scrollerInner = scroller.querySelector(".scroller_inner");
				const scrollerContent = Array.from(scrollerInner.children);

				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					duplicatedItem.setAttribute("aria-hidden", true);
					scrollerInner.appendChild(duplicatedItem);
				});
			});
		};

		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}
	}, []); // Use React's useEffect to run once after component mount

	return (
		<div className="scroller w-full">
			<div className="scroller_inner">
				<img src={heroImage1} alt="" className="h-full" />
				<img src={heroImage2} alt="" className="h-full"/>
				<img src={heroImage3} alt="" className="h-full"/>
				<img src={heroImage4} alt="" className="h-full"/>
				<img src={heroImage5} alt="" className="h-full"/>
				<img src={heroImage6} alt="" className="h-full"/>
				<img src={heroImage7} alt="" className="h-full"/>
			</div>
		</div>
	);
};

export default HeroImageScroll;
