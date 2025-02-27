import { useRef } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import {
	arrowLeft,
	arrowRight,
	crossIcon,
	trustee1,
	trustee2,
	trustee3,
	trustee4,
	trustee5,
	trusteesIcon,
} from "../assets";

const TrusteePopUp = ({ isOpen, onClose }) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	if (!isOpen) return null; // Hide if popup is closed

	const trustees = [
		{
			img: trustee1,
			name: "K Ishwara Bhat",
			description:
				"An educator with an MSc, BEd, and LLB, K Ishwara Bhat served as Principal of Sarvodaya Vidyalaya, NCT, for 14 years after two decades of teaching. A father to two autistic sons, (late) Shankar and Suhas, he founded the Shankar Suhas Charitable Trust in 2018 to promote dignity, education, and inclusion.",
		},
		{
			img: trustee2,
			name: "Ganga Bhat",
			description:
				"With an MSc, CAIIB, and a PG Diploma in Financial Management, Ganga Bhat served in a nationalized bank for 35+ years. As a mother to two autistic sons, she co-founded the Shankar Suhas Charitable Trust in 2018 to create an inclusive space for education and care.",
		},
		{
			img: trustee3,
			name: "Saravu K. Bhat",
			description:
				"A translator and voice-over artist, Saravu K. Bhat has shaped Kannada-language media for 35+ years across radio, television, and corporate content. Passionate about Kannada theatre, he blends linguistic expertise with artistic and administrative contributions.",
		},
		{
			img: trustee4,
			name: "S. Ravishankara Bhat",
			description:
				"A corporate leader with 25+ years of experience, S. Ravishankara Bhat holds an engineering degree from Mysore University and a PGCBM from XLRI. Now MD of GMR Airports Group’s Indonesia venture, he specializes in revenue management, business development, and strategy.",
		},
		{
			img: trustee5,
			name: "Ashi Bhat",
			description:
				"A technology lawyer, Ashi Bhat is regional counsel (India and West Asia) at Google. Passionate about literacy and education, she works to expand learning access for meaningful change.",
		},
	];

	return (
		<div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
			<div className="flex flex-col items-center justify-start max-h-[90%] max-w-[90%] bg-beige rounded-lg shadow-lg p-6 gap-8">
				{/* Close Button */}
				<div className="w-full flex justify-end">
					<button
						onClick={onClose}
						className="p-2 hover:scale-125 transition-transform ease-in"
					>
						<img src={crossIcon} alt="close" className="w-4" />
					</button>
				</div>

				{/* Title and Navigation */}
				<div className="w-full flex justify-between px-12">
					<img src={trusteesIcon} alt="Trustees Icon" className="w-12" />
					<div className="flex gap-4">
						<button
							ref={prevRef}
							className="group p-2 w-12 h-12 bg-offwhite/95 hover:bg-offwhite rounded-full flex items-center justify-center transition-all"
						>
							<img
								src={arrowLeft}
								alt="Prev"
								className="w-4 transition-all group-hover:w-5"
							/>
						</button>
						<button
							ref={nextRef}
							className="group p-2 w-12 h-12 bg-offwhite/95 hover:bg-offwhite rounded-full flex items-center justify-center transition-all"
						>
							<img
								src={arrowRight}
								alt="Next"
								className="w-4 transition-all group-hover:w-5"
							/>
						</button>
					</div>
				</div>

				{/* Swiper Carousel */}
				<div className="px-12 pb-12 w-full">
					<Swiper
						slidesPerView={3.5}
						spaceBetween={15}
						freeMode={true}
						loop={true}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = prevRef.current;
							swiper.params.navigation.nextEl = nextRef.current;
						}}
						modules={[FreeMode, Navigation]}
						className="w-full"
					>
						{trustees.map((trustee, index) => (
							<SwiperSlide key={index}>
								<div className="flex flex-col items-start gap-4 font-cormorant font-normal text-grey rounded-xl px-6 py-8">
									<img
										src={trustee.img}
										alt={trustee.name}
										className="h-full w-full object-cover rounded-lg"
									/>
									<h3 className="text-3xl">{trustee.name}</h3>
									<p className="italic text-lg">{trustee.description}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

TrusteePopUp.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default TrusteePopUp;
