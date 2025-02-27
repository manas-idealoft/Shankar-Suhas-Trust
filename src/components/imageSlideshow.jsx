import {
	originImage1,
	originImage2,
	originImage3,
	originImage4,
	originImage5,
	originImage6,
	originImage7,
	originImage8,
	originImage9,
	originImage10,
	originImage11,
	originImage12,
	originImage13,
} from "../assets";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

const ImageSlideshow = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const images = [
		originImage1,
		originImage2,
		originImage3,
		originImage4,
		originImage5,
		originImage6,
		originImage7,
		originImage8,
		originImage9,
		originImage10,
		originImage11,
		originImage12,
		originImage13,
	];

	// Shift thumbnails so active image is always first
	useEffect(() => {
		if (thumbsSwiper) {
			thumbsSwiper.slideTo(activeIndex);
		}
	}, [activeIndex, thumbsSwiper]);

	return (
		<div className="relative w-full h-full flex flex-col gap-4">
			{/* Main Image Swiper */}
			<Swiper
				style={{ "--swiper-navigation-color": "#ffffff" }}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				loop={true}
				modules={[FreeMode, Navigation, Thumbs, Autoplay]}
				className="h-full w-full"
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
			>
				{images.map((image, index) => (
					<SwiperSlide
						key={index}
						className="flex items-center justify-center bg-white"
					>
						<img
							src={image}
							alt={`Image ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Thumbnails Overlay */}
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={6}
				breakpoints={{
					320: { slidesPerView: 4.5 },
					640: { slidesPerView: 6.5 },
					1024: { slidesPerView: 8.5 },
					1280:{slidesPerView:11.5}

				}}
				freeMode={true}
				watchSlidesProgress={true}
				loop={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="w-full h-20 md:h-24 lg:h-28"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index} className="cursor-pointer">
						<img
							src={image}
							alt={`Thumbnail ${index + 1}`}
							className={`w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 object-cover rounded-md transition-all duration-300 ${
								index === activeIndex
									? "opacity-100 border-2 border-brown scale-100"
									: "opacity-60 scale-90"
							}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ImageSlideshow;
