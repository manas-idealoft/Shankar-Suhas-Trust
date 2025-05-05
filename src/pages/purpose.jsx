import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useRef } from "react";
import {
	arrowRight,
	purposeBg,
	purposeIcon,
	quoteMarkIcon,
} from "../assets";
import { ImageSlideshow, TrusteePopUp } from "../components";

const Purpose = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	  const targetRef = useRef(null);
		const { scrollYProgress } = useScroll({
			target: targetRef,
		});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
	const dot1Opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
	const dot2Opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

const slide1Opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
const slide2Opacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

	// Function to open popup
	const openPopup = () => setIsPopupOpen(true);
	// Function to close popup
	const closePopup = () => setIsPopupOpen(false);

	return (
		<div className="pt-24 lg:pt-32">
			{/* Purpose Section starts */}
			<div
				id="purpose"
				className="md:h-screen flex flex-col-reverse md:flex-row bg-purpose-bg bg-no-repeat bg-left-bottom pb-16 lg:pb-64"
			>
				<div className="w-full md:w-1/2 xl:w-1/3 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center md:items-start mt-12 lg:mt-24 gap-4 xl:gap-6">
					<img
						src={purposeIcon}
						alt="Icon showing two sets of leaves"
						className="w-12 md:w-16 lg:w-28"
					/>
					<h6 className="font-cormorant font-light text-brown text-lg lg:text-lg xl:text-xl">
						ಉದ್ದೇಶ | <em className="font-medium italic">PURPOSE</em>
					</h6>
					<h4 className="font-cormorant font-medium text-grey md:text-[#003a3e] text-3xl lg:text-4xl xl:text-5xl text-center md:text-start">
						A Tapestry of
						<br />
						<em className="italic">Inclusion and Care</em>
					</h4>
					<p className="font-cormorant font-light text-grey text-lg md:text-xl xl:text-2xl text-center md:text-start">
						The{" "}
						<em className="font-medium not-italic">
							welfare center and the proposed inclusive school
						</em>{" "}
						are in a{" "}
						<em className="font-medium not-italic">
							pollution free, lush green campus
						</em>{" "}
						at Khata no.592, Doddakanya Village, Sinduvalli Panchayat, Mysuru,
						located at a distance of 8 km from the airport & 5 km from Kadakola
						railway station.
					</p>
				</div>

				{/* Image Section */}
				<div className="w-full md:w-1/2 xl:w-2/3 h-full sm:h-96 md:h-screen">
					<img
						src={purposeBg}
						alt="Purpose visual"
						className="w-full h-full object-cover object-left-bottom"
					/>
				</div>
			</div>

			{/* Purpose Section ends */}

			{/* Learning Section starts */}
			<div
				id="Learning"
				ref={targetRef}
				className="relative h-[200vh] bg-offwhite"
			>
				<div className="sticky h-screen top-0 bg-status-bg bg-top bg-cover flex items-center justify-center">
					<div className="h-3/4 w-3/4 bg-offwhite flex flex-col items-center justify-between gap-4 overflow-hidden">
						<div className="flex flex-col h-full items-center w-full justify-between p-6 md:p-8 lg:p-12 xl:p-16">
							<div className="flex flex-col gap-8 md:gap-10 xl:gap-16 items-center">
								<div className="flex flex-col gap-4 md:gap-8 w-full xl:w-2/3 items-center">
									<h6 className="font-cormorant font-light text-brown text-lg md:text-lg lg:text-xl xl:text-2xl text-center">
										ಕಲಿಕೆ | <em className="font-medium italic">LEARNING</em>
									</h6>
									<h4 className="font-cormorant font-medium text-grey text-2xl md:text-3xl lg:text-4xl text-center w-full">
										<em className="italic font-bold text-brown">The Trust: </em>{" "}
										<br />
										Learning with Dignity, Growth with Inclusion
									</h4>
								</div>
								<motion.div style={{ x }} className="flex w-full">
									{/* Slide 1 */}
									<motion.div
										style={{ opacity: slide1Opacity }}
										className="min-w-full flex justify-center px-2 md:px-4"
									>
										<div className=" w-full md:w-3/4 lg:w-2/3 flex flex-col items-center gap-4 xl:gap-8">
											<p className="w-full font-light font-cormorant text-justify md:text-center text-base md:text-lg lg:text-xl xl:text-2xl">
												We walk the path of seva, shaping a future where
												education becomes the bridge to empowerment. This
												gurukul of inclusivity nurtures every learner—Divyang
												and underserved alike—through compassion, acceptance,
												and knowledge.
											</p>
											<p className="w-full font-light font-cormorant text-justify md:text-center text-base md:text-lg lg:text-xl xl:text-2xl">
												This is more than a mission; it is a movement to create
												and grow a space where learning, dignity, and belonging
												thrive.
											</p>
										</div>
									</motion.div>

									{/* Slide 2 */}
									<motion.div
										style={{ opacity: slide2Opacity }}
										className="min-w-full flex justify-center px-4"
									>
										<div className=" w-full md:w-3/4 lg:w-2/3 flex flex-col items-center gap-4 xl:gap-8">
											<p className="w-full font-light font-cormorant text-justify md:text-center text-base md:text-lg lg:text-xl xl:text-2xl">
												We walk the path of seva, shaping a future where
												education becomes the bridge to empowerment. This
												gurukul of inclusivity nurtures every learner—Divyang
												and underserved alike—through compassion, acceptance,
												and knowledge.
											</p>
											<p className="w-full font-light font-cormorant text-justify md:text-center text-base md:text-lg lg:text-xl xl:text-2xl">
												This is more than a mission; it is a movement to create
												and grow a space where learning, dignity, and belonging
												thrive.
											</p>
										</div>
									</motion.div>
								</motion.div>
							</div>
							<div className="flex gap-4">
								<motion.div
									style={{ opacity: dot1Opacity }}
									className="w-8 md:w-12 h-1 md:h-2 bg-brown rounded-full"
								></motion.div>
								<motion.div
									style={{ opacity: dot2Opacity }}
									className="w-8 md:w-12 h-1 md:h-2 bg-brown rounded-full"
								></motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div
				id="learning"
				className="h-full  bg-status-bg bg-no-repeat bg-top md:bg-center bg-contain md:bg-cover flex flex-col px-8 md:px-12 lg:px-24 gap-8 md:gap-16 lg:gap-20 xl:gap-24 pt-12 pb-24 md:py-36"
			>
				<div className="flex flex-col xl:flex-row justify-between w-full items-start md:items-center xl:items-start gap-24 md:gap-8">
					<div className="flex flex-col text-start md:items-center xl:items-start w-full xl:w-5/12 gap-4">
						<h6 className="font-cormorant font-light text-brown text-lg md:text-2xl text-start md:text-center xl:text-start">
							ಕಲಿಕೆ | <em className="font-medium italic">LEARNING</em>
						</h6>
						<img
							src={statusIcon}
							alt="Icon showing two sets of leaves"
							className="w-12 lg:w-16"
						/>
					</div>
					<div className="w-full md:w-2/3 xl:w-2/5  text-xl lg:text-2xl font-light font-cormorant text-start md:text-center lg:text-justify xl:text-start flex flex-col gap-8">
						<h4 className="font-cormorant font-medium text-grey text-3xl md:text-4xl text-start md:text-center xl:text-start">
							<em className="italic font-semibold">The Trust: </em>{" "}
							<br className="block md:hidden" />
							Learning with Dignity, Growth with Inclusion
						</h4>
						<p>
							We walk the path of seva, shaping a future where education becomes
							the bridge to empowerment. This gurukul of inclusivity nurtures
							every learner—Divyang and underserved alike—through compassion,
							acceptance, and knowledge.
						</p>
						<p>
							This is more than a mission; it is a movement to create and grow a
							space where learning, dignity, and belonging thrive.
						</p>
						<p>
							The Shankar Suhas Trust is building an{" "}
							<em className="font-semibold">inclusive school</em> where
							education transcends barriers. Rooted in{" "}
							<em className="font-semibold">
								sneh (affection) and seva (service),
							</em>{" "}
							this space welcomes children from all backgrounds, ensuring
							Divyang students and underserved communities receive equal
							opportunities to learn and grow.
						</p>
					</div>
				</div>
			</div> */}
			{/* Learning Section ends */}

			{/* Activities Section begins */}
			<div
				id="activities"
				className="h-full overflow-y-auto relative px-8 md:px-24 py-8 md:py-16 xl:py-24 flex flex-col object-contain justify-center"
			>
				<div className="flex">
					<div>
						<h6 className="font-cormorant font-light text-terracotta text-lg lg:text-xl pt-16 md:pt-24">
							ಚಟುವಟಿಕೆಗಳು | <em className="font-medium italic">ACTIVITIES</em>
						</h6>
						<h4 className="font-cormorant font-normal text-brown text-2xl md:text-3xl lg:text-5xl">
							Glimpse of Our Activities
						</h4>
					</div>
				</div>
				<div className="py-4 md:py-6 flex-grow">
					<ImageSlideshow />
				</div>
			</div>
			{/* Activities Section ends */}

			{/* Creators Section starts */}
			<div
				id="creators"
				className=" relative h-screen bg-creators-bg bg-no-repeat bg-bottom bg-[length:375%] md:bg-[length:450%] md:bg-center xl:bg-cover flex flex-col lg:flex-row items-start lg:items-end w-full px-8 md:px-16 xl:px-24 pt-24 pb-16 lg:pb-24 xl:py-16 justify-between gap-8 xl:gap-0"
			>
				<div className="absolute inset-0 bg-gradient-to-t xl:bg-gradient-to-tr from-black/80 via-black/50 md:via-black-20 lg:via-black/10 to-transparent z-10"></div>
				<div className="flex flex-col justify-end h-full gap-4 md:gap-12 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 z-20">
					<div className="flex flex-col gap-4 md:gap-6 bg-none lg:bg-white/20 lg:backdrop-blur-sm lg:p-4 xl:p-12">
						<h6 className="font-cormorant font-light text-offwhite text-lg md:text-xl">
							ತಯಾರಕರು | <em className="font-medium italic">CREATORS</em>
						</h6>
						<img
							src={quoteMarkIcon}
							alt="Icon showing double quote mark"
							className="w-16 md:w-20 xl:w-24"
						/>
						<h4 className="font-cormorant font-light text-offwhite text-lg md:text-2xl leading-normal">
							We aim to administer the properties of the Trust in achieving the
							objectives and
							<em className="italic">
								&nbsp;make this world a more accessible place to live
							</em>
						</h4>
						<div>
							<h5 className="font-cormorant font-medium text-offwhite text-lg md:text-xl">
								- Ishwara and Ganga Bhat
							</h5>
							<p className="font-cormorant font-light text-offwhite text-sm md:text-lg pl-2">
								Founders, Shankar Suhas Trust
							</p>
						</div>
					</div>
				</div>
				<button
					className="flex py-2 md:py-4 px-4 md:px-8 bg-offwhite rounded-md md:rounded-lg w-fit items-center gap-2 z-20"
					onClick={openPopup}
				>
					<p className="font-cormorant text-brown font-normal text-lg md:text-xl">
						List of Trustees
					</p>
					<img src={arrowRight} alt="Arrow Icon" className="w-5" />
				</button>
				{/* Render Popup if isPopupOpen is true */}
				{isPopupOpen && (
					<TrusteePopUp isOpen={isPopupOpen} onClose={closePopup} />
				)}
			</div>
			{/* Creators Section ends */}
		</div>
	);
};

export default Purpose;
