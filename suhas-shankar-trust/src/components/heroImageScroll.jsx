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
	return (
		<div className="overflow-hidden w-full h-2/5">
			<div className="hero-scroll flex gap-8 h-full">
				<img src={heroImage1} alt="" />
				<img src={heroImage2} alt="" />
				<img src={heroImage3} alt="" />
				<img src={heroImage4} alt="" />
				<img src={heroImage5} alt="" />
				<img src={heroImage6} alt="" />
				<img src={heroImage7} alt="" />
				<img src={heroImage1} alt="" />
				<img src={heroImage2} alt="" />
				<img src={heroImage3} alt="" />
				<img src={heroImage4} alt="" />
				<img src={heroImage5} alt="" />
				<img src={heroImage6} alt="" />
				<img src={heroImage7} alt="" />
			</div>
		</div>
	);
};

export default HeroImageScroll;
