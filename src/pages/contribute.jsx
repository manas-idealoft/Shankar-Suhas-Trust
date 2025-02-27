import { arrowBlack, arrowDown, chevronDown, chevronUp } from "../assets";
import { ImageSlideshow } from "../components";
import { useState } from "react";
import {
	mapIcon,
	zoomIcon,
	// originImage1,
	// originImage2,
	// originImage3,
	// originImage4,
	// originImage5,
	// originImage6,
	// originImage7,
	// originImage8,
	// originImage9,
	// originImage10,
	// originImage11,
	// originImage12,
	// originImage13,
} from "../assets";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/autoplay";

// import { FreeMode, Navigation, Thumbs } from "swiper/modules";


const Contribute = () => {
    const [formData, setFormData] = useState({
			name: "",
			reason: "",
			email: "",
			phoneNumber: "",
			location: "",
	});
	
	// const images = [
	// 	originImage1,
	// 	originImage2,
	// 	originImage3,
	// 	originImage4,
	// 	originImage5,
	// 	originImage6,
	// 	originImage7,
	// 	originImage8,
	// 	originImage9,
	// 	originImage10,
	// 	originImage11,
	// 	originImage12,
	// 	originImage13,
	// ];
    
	// const [thumbsSwiper, setThumbsSwiper] = useState(null);
	// const [activeIndex, setActiveIndex] = useState(0);

	const handleChange = (e) => {
			const { name, value } = e.target;
			setFormData((prevState) => ({
				...prevState,
				[name]: value,
			}));
	};

	const handleSubmit = (e) => {
			e.preventDefault();
			console.log("Form Submitted", formData);
			// Here you can handle sending form data to your backend or email service
    };
    

    const faqData = [
			{
				question: "What is the mission of the foundation?",
				answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, ipsam maxime laudantium dolor magnam nostrum fugiat sit earum ducimus debitis.",
			},
			{
				question:
					"Who can benefit from the services provided by the foundation?",
				answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, ipsam maxime laudantium dolor magnam nostrum fugiat sit earum ducimus debitis.",
			},
			{
				question: "How can I donate to the foundation?",
answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, ipsam maxime laudantium dolor magnam nostrum fugiat sit earum ducimus debitis.",
			},
			{
				question: "How can I enroll someone in the school or old age home?",
				answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, ipsam maxime laudantium dolor magnam nostrum fugiat sit earum ducimus debitis.",
			},
    ];
    
const [toggleIndex, setToggleIndex] = useState(null);

const handleToggle = (index) => {
	setToggleIndex(toggleIndex === index ? null : index);
};

	return (
		<div>
			<div
				id="origin"
				className="h-full relative px-24 pt-36 overflow-hidden flex flex-col gap-8 object-contain justify-center"
			>
				<div className="flex justify-between items-end grow-0">
					<div>
						<h6 className="font-cormorant font-light text-terracotta text-xl pt-24">
							ಕಥೆ | <em className="font-medium italic">ORIGIN</em>
						</h6>
						<h4 className="font-cormorant font-normal text-terracotta text-5xl">
							The Heartfelt Journey Behind
							<br /> This Foundation
						</h4>
					</div>
					<a
						href="/public/SuhasShankarTrust_Map.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className=" flex px-4 py-3 bg-beige items-center gap-4 h-fit"
					>
						<img src={mapIcon} alt="Map Icon" className="w-3 md:w-5" />
						<p className="font-cormorant font-medium italic text-base md:text-lg">
							A Peek At Our Growing Aangan
						</p>
						<img src={zoomIcon} alt="Zoom Icon" className="w-3 md:w-5" />
					</a>
				</div>
				<ImageSlideshow
					// activeIndex={activeIndex}
					// setActiveIndex={setActiveIndex}
					// thumbsSwiper={thumbsSwiper}
					// setThumbsSwiper={setThumbsSwiper}
				/>
				{/* <div className="absolute bottom-1 px-32 left-1/2 transform -translate-x-1/2 w-full rounded-xl z-10"> */}
					{/* <Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={6}
						breakpoints={{
							320: { slidesPerView: 4 },
							640: { slidesPerView: 6 },
							1024: { slidesPerView: 12 },
						}}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="w-full h-28"
					>
						{images.map((image, index) => (
							<SwiperSlide key={index} className="cursor-pointer">
								<img
									src={image}
									alt={`Thumbnail ${index + 1}`}
									className={`w-24 h-24 object-cover rounded-md transition-all duration-300 drop-shadow-2xl ${
										index === activeIndex
											? "opacity-100 border-2 border-brown scale-100"
											: "opacity-60 scale-90"
									}`}
								/>
							</SwiperSlide>
						))}
					</Swiper> */}
				{/* </div> */}
			</div>
			<div id="contribute" className="h-svh py-24 px-24">
				<div className="flex gap-5 ">
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಸಮುದಾಯ | <em className="font-medium italic">CONTRIBUTE</em>
					</h6>
					<img
						src={arrowDown}
						alt="Arrow pointing downward"
						className="w-12 pt-4"
					/>
				</div>
				<div className="bg-form-bg flex mt-12 p-20 gap-12">
					<div className="w-1/3">
						<h4 className="font-cormorant font-normal text-terracotta text-4xl">
							Get involved with the <br />
							foundation to{" "}
							<em className="italic">
								make a <br />
								difference!
							</em>
						</h4>
						<div className="pt-28">
							<h6 className="font-cormorant font-light text-terracotta text-xl">
								ಸಮುದಾಯ |<em className="font-medium italic"> DIRECT CONTACT</em>
							</h6>
							<div className="font-cormorant font-normal text-xl w-2/3 pt-4">
								<p>
									4, Parthasarathynagara, Dasankoppal Gate, Bogadi, Mysuru-570
									026
								</p>
								<div className="flex flex-col pt-12 gap-4">
									<a href="mailto:contact@sst.org">contact@sst.org</a>
									<a href="tel:+910000000000">+91 000 000 0000</a>
								</div>
							</div>
						</div>
					</div>
					<form
						onSubmit={handleSubmit}
						className="font-cormorant text-2xl w-2/3 flex flex-col justify-between"
					>
						<div className="w-full">
							<label className="">Name</label>
							<input
								type="text"
								name="name"
								placeholder="First and last name"
								value={formData.name}
								onChange={handleChange}
								className="w-full bg-transparent border-b border-grey outline-none py-2 text-grey"
							/>
						</div>

						<div className="">
							<label className="">
								Why do you want to get involved with us?
							</label>
							<input
								type="text"
								name="reason"
								placeholder="Your answer :))"
								value={formData.reason}
								onChange={handleChange}
								className="w-full bg-transparent border-b border-grey outline-none py-2 text-grey"
							/>
						</div>

						<div className=" flex gap-8">
							<div className="w-1/2">
								<label className="">Email</label>
								<input
									type="email"
									name="email"
									placeholder="Your email address"
									value={formData.email}
									onChange={handleChange}
									className="w-full bg-transparent border-b border-grey outline-none py-2 text-grey"
								/>
							</div>

							<div className="w-1/2">
								<label className="">Phone Number</label>
								<input
									type="tel"
									name="phoneNumber"
									placeholder="Your phone number"
									value={formData.phoneNumber}
									onChange={handleChange}
									className="w-full bg-transparent border-b border-grey outline-none py-2 text-grey"
								/>
							</div>
						</div>

						<div className="flex gap-8 items-end">
							<div className="w-1/2 flex flex-col">
								<label className="">Location</label>
								<input
									type="text"
									name="location"
									placeholder="Your country and city"
									value={formData.location}
									onChange={handleChange}
									className=" bg-transparent border-b border-grey outline-none py-2 text-grey"
								/>
							</div>

							<div className="flex w-1/2 h-2/3">
								<button
									type="submit"
									className="flex items-center gap-2 bg-white px-8 py-2 border rounded-md transition"
								>
									<p>Submit</p>
									<img src={arrowBlack} alt="Arrow" className="w-5" />
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div id="questions" className="h-fit px-24 py-24 flex ">
				<div className="flex gap-16 px-8">
					<div className="flex flex-col w-3/5">
						<div className="flex flex-col w-full">
							{faqData.map((item, index) => (
								<div
									key={index}
									className="flex flex-col mb-6 pb-6 border-b border-grey"
								>
									<div
										onClick={() => handleToggle(index)}
										className="flex justify-between cursor-pointer text-2xl font-medium font-cormorant"
									>
										<p className="w-4/5">{item.question}</p>
										<img
											src={toggleIndex === index ? chevronUp : chevronDown}
											alt="Chevron Down"
											className="w-6"
										/>
									</div>
									<div
										className={`${
											toggleIndex === index ? "block" : "hidden"
										} font-cormorant font-light text-2xl text-grey pt-4 `}
									>
										<p>{item.answer}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-2/5">
						<h6 className="font-cormorant font-light text-terracotta text-xl">
							ಪ್ರಶ್ನೆಗಳು | <em className="font-medium italic">QUESTIONS</em>
						</h6>
						<h4 className="font-cormorant font-normal text-grey text-3xl pt-4">
							Till then, we might be able to answer a few questions for you!
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contribute;
