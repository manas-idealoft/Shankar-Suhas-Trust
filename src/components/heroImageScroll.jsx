import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import { FreeMode, Autoplay } from "swiper/modules";

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
	const heroImages = [
		heroImage1,
		heroImage2,
		heroImage3,
		heroImage4,
		heroImage5,
		heroImage6,
		heroImage7,
	];

	return (
		<div className="w-full h-[300px] md:h-[400px] xl:h-[500px] overflow-hidden">
			<Swiper
				spaceBetween={10} // Remove unwanted gaps
				slidesPerView={4}
				speed={2000} // Controls smooth scrolling speed
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: false,
				}}
				loop={true} // Enables continuous looping
				freeMode={true} // Allows fluid motion
				modules={[FreeMode, Autoplay]}
				className="h-full w-full"
			>
				{[...heroImages, ...heroImages].map((img, index) => (
					<SwiperSlide key={index} className="w-auto flex-shrink-0">
						<img
							src={img}
							alt={`Hero ${index + 1}`}
							className="h-full w-auto object-contain"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HeroImageScroll;

// React.useEffect(() => {
// 	const scrollers = document.querySelectorAll(".scroller");
// 	const addAnimation = () => {
// 		scrollers.forEach((scroller) => {
// 			// Prevent multiple duplications
// 			if (scroller.getAttribute("data-animated")) return;
// 			scroller.setAttribute("data-animated", true);
// 			const scrollerInner = scroller.querySelector(".scroller_inner");
// 			const scrollerContent = Array.from(scrollerInner.children);
// 			scrollerContent.forEach((item) => {
// 				const duplicatedItem = item.cloneNode(true);
// 				duplicatedItem.setAttribute("aria-hidden", true);
// 				scrollerInner.appendChild(duplicatedItem);
// 			});
// 		});
// 	};
// 	if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// 		addAnimation();
// 	}
// }, []); // Use React's useEffect to run once after component mount
// return (
// 	<div className="scroller w-full h-fit md:h-full xl:h-fit">
// 		<div className="scroller_inner">
// 			<img src={heroImage1} alt="" className="h-full" />
// 			<img src={heroImage2} alt="" className="h-full"/>
// 			<img src={heroImage3} alt="" className="h-full"/>
// 			<img src={heroImage4} alt="" className="h-full"/>
// 			<img src={heroImage5} alt="" className="h-full"/>
// 			<img src={heroImage6} alt="" className="h-full"/>
// 			<img src={heroImage7} alt="" className="h-full"/>
// 		</div>
// 	</div>
// );
