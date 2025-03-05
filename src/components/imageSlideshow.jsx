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

import PropTypes from "prop-types";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

const origin = [
	{
		image: originImage1,
		date: "28/02/25",
		title: "Trust Map",
		description: "A peek at the map and details of the trust site",
		link: "/SuhasShankarTrust_Map.pdf",
	},
	{
		image: originImage2,
		date: "28/02/2025",
		title: "Solar Power Plant Addition",
		description:
			"Trust received a 5KW Hybrid power plant with a 5kw lithium battery",
		link: "",
	},
	{
		image: originImage3,
		date: "28/02/2025",
		title: "One Of The Initial Donations",
		description: "Memory of one of the initial trust contributors",
		link: "",
	},
	{
		image: originImage4,
		date: "28/02/2025",
		title: "Cultural program",
		description: "Stills from program dance performance",
		link: "",
	},
	{
		image: originImage5,
		date: "28/02/2025",
		title: "Cultural program",
		description: "Stills from the cultural inauguration program",
		link: "",
	},
	{
		image: originImage6,
		date: "28/02/2025",
		title: "Guests",
		description: "Honourable guests at the inauguration program",
		link: "",
	},
	{
		image: originImage7,
		date: "28/02/2025",
		title: "Guest Donation",
		description: "Honourable guests providing a token of contribution",
		link: "",
	},
	{
		image: originImage8,
		date: "28/02/2025",
		title: "Guest Donation",
		description: "Honourable guests providing a token of contribution",
		link: "",
	},
	{
		image: originImage9,
		date: "28/02/2025",
		title: "Program Inauguration",
		description: "Honourable guests initiating the inauguration program",
		link: "",
	},
	{
		image: originImage10,
		date: "28/02/2025",
		title: "Foundation Family",
		description: "Glance of the Shankar Suhas Family",
		link: "",
	},
	{
		image: originImage11,
		date: "28/02/2025",
		title: "Celebration",
		description: "Sounds of drums and music filled the air at the inauguration",
		link: "",
	},
	{
		image: originImage12,
		date: "28/02/2025",
		title: "Inspection of the Site",
		description:
			"Inspection was conducted at the construction site for the school",
		link: "",
	},
	{
		image: originImage13,
		date: "28/02/2025",
		title: "An Auspicious Start",
		description: "Event began with an auspicious Puja.",
		link: "",
	},
];

const ImageSlideshow = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (thumbsSwiper) thumbsSwiper.slideTo(activeIndex);
	}, [activeIndex, thumbsSwiper]);

	return (
		<div className="relative w-full h-full flex flex-col gap-4">
			{/* Main Image Swiper - Vertical on Mobile */}
			<Swiper
				style={{ "--swiper-navigation-color": "#ffffff" }}
				spaceBetween={10}
				navigation
				thumbs={{ swiper: thumbsSwiper }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				loop
				modules={[FreeMode, Navigation, Thumbs, Autoplay]}
				className="w-full h-[40vh] sm:h-60vh lg:h-full"
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
			>
				{origin.map((item, index) => (
					<SwiperSlide key={index} className="relative">
						{item.link ? (
							<a href={item.link} target="_blank" rel="noopener noreferrer">
								<SlideContent item={item} />
							</a>
						) : (
							<SlideContent item={item} />
						)}
					</SwiperSlide>
				))}
			</Swiper>

			{/* Thumbnails - Below on Mobile, Side on Desktop */}
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={6}
				breakpoints={{
					320: { slidesPerView: 4.5 },
					640: { slidesPerView: 6.5 },
					1024: { slidesPerView: 8.5 },
					1280: { slidesPerView: 11.5 },
				}}
				freeMode
				watchSlidesProgress
				loop
				modules={[FreeMode, Navigation, Thumbs]}
				className="w-full h-20 lg:h-full"
			>
				{origin.map((item, index) => (
					<SwiperSlide key={index} className="cursor-pointer">
						<div className="relative">
							<img
								src={item.image}
								alt={`Thumbnail ${index + 1}`}
								className={`w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 object-cover rounded-md transition-all duration-300 ${
									index === activeIndex
										? "opacity-100 border-2 border-terracotta scale-100"
										: "opacity-60 scale-90"
								}`}
							/>
							{/* Black Overlay on Active Thumbnail */}
							{index === activeIndex && (
								<div className="absolute inset-0 bg-black/50 rounded-md"></div>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

const SlideContent = ({ item }) => (
	<>
		<img
			src={item.image}
			alt={item.title}
			className="w-full h-full object-cover"
		/>
		<div className="absolute bottom-4 left-4 p-2 xl:p-4 text-beige max-w-[90%] md:w-1/3 z-20 font-cormorant">
			<p className="text-base md:text-xl">{item.date}</p>
			<h3 className="font-bold text-lg md:text-3xl">{item.title}</h3>
			<p className="text-base md:text-xl">{item.description}</p>
		</div>
		<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
	</>
);

SlideContent.propTypes = {
	item: PropTypes.shape({
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
};


export default ImageSlideshow;
