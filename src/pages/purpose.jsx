import { useEffect, useState } from "react";
import { arrowRight, buildingIcon1, buildingIcon2, buildingIcon3, buildingIcon4, buildingIcon5, buildingIcon6, buildingIconMain, buildingImage1, buildingImage2, purposeIcon, quoteMarkIcon, statusIcon } from "../assets";
import { TrusteePopUp } from "../components";

const Purpose = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

		// Function to open popup
		const openPopup = () => setIsPopupOpen(true);
		// Function to close popup
    const closePopup = () => setIsPopupOpen(false);

    	const [isLarge, setIsLarge] = useState(window.innerWidth > 1280);

			useEffect(() => {
				const handleResize = () => setIsLarge(window.innerWidth > 1280);
				window.addEventListener("resize", handleResize);
				return () => window.removeEventListener("resize", handleResize);
			}, []);
    
    return (
			<div className="pt-36 lg:pt-32">
				{/* Purpose Section starts */}

				<div
					id="purpose"
					className="h-full lg:h-screen bg-purpose-bg bg-no-repeat bg-bottom bg-[length:300%] md:bg-cover flex justify-center pb-64"
				>
					<div className="w-full md:w-3/4 xl:w-1/2 px-12 flex flex-col items-center mt-12 lg:mt-24 gap-4 lg:gap-6">
						<img
							src={purposeIcon}
							alt="Icon showing two sets of leaves"
							className="w-16 lg:w-28"
						/>
						<h6 className="font-cormorant font-light text-brown text-lg lg:text-xl">
							ಉದ್ದೇಶ | <em className="font-medium italic">PURPOSE</em>
						</h6>
						<h4 className="font-cormorant font-medium text-grey md:text-[#003a3e] text-3xl lg:text-5xl text-center">
							A Tapestry of
							<br />
							<em className="italic">Inclusion and Care</em>
						</h4>
						<div className="">
							<p className="font-cormorant font-light text-grey text-xl lg:text-3xl xl:text-2xl text-center">
								The{" "}
								<em className="font-medium not-italic">
									welfare center and the proposed inclusive school
								</em>
								&nbsp;are in a{" "}
								<em className="font-medium not-italic">
									pollution free, lush green campus
								</em>{" "}
								at Khata no.592, Doddakanya village, Sinduvalli Panchayat,
								Mysuru, located at a distance of 8 km from the airport & 5 km
								from Kadakola railway station.
							</p>
						</div>
					</div>
				</div>

				{/* Purpose Section ends */}
				{/* Learning Section starts */}

				<div
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
								Learning with
								Dignity, Growth with Inclusion
							</h4>
							<p>
								We walk the path of seva, shaping a future where education
								becomes the bridge to empowerment. This gurukul of inclusivity
								nurtures every learner—Divyang and underserved alike—through
								compassion, acceptance, and knowledge.
							</p>
							<p>
								This is more than a mission; it is a movement to create and grow
								a space where learning, dignity, and belonging thrive.
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
				</div>

				{/* Learning Section ends */}

				{/* Building Section starts */}

				<div
					id="building"
					className="h-full xl:h-svh bg-brown bg-building-bg flex justify-center items-center pt-8 pb-0 px-8 md:px-16 md:py-12 xl:px-24 xl:py-16"
				>
					<div className="  h-full w-full object-contain bg-offwhite rounded-lg flex flex-col xl:flex-row justify-center items-center xl:items-start xl:justify-start">
						<div className=" w-full xl:w-7/12 h-full px-4 md:px-12 py-12 flex flex-col justify-between gap-6 md:gap-12 xl:gap-6 xl:items-start items-center">
							<div className="flex flex-col gap-3 md:gap-6 xl:items-start items-center">
								<h6 className="font-cormorant font-light text-brown text-base md:text-lg xl:text-xl text-center xl:text-start">
									ನಿರ್ಮಿಸಲು | <em className="font-medium italic">BUILDING</em>
								</h6>
								<h4 className="font-cormorant font-normal text-brown text-2xl md:text-4xl xl:text-5xl text-center xl:text-start">
									Weaving Lives, Nurturing
									<br /> a <em className="italic">Collective Dream</em>
								</h4>
								<img
									src={buildingIconMain}
									alt="Icon showing a flower with two leaves popping out from the side."
									className="w-16 md:w-20 xl:w-24"
								/>
							</div>
							<div
								id="building-pointers"
								className="font-cormorant font-normal text-grey lg:text-brown text-lg xl:text-xl h-fit w-full md:w-3/4 lg:w-full flex flex-col lg:grid lg:grid-cols-2 lg:auto-rows-min gap-6 overflow-y-auto"
							>
								<div className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-2 items-center lg:items-start">
									<img src={buildingIcon1} alt="" />
									<p className="text-center lg:text-left">
										To establish and run a center for the welfare of old and
										divyanga, The word divyanga shall include slow-learners,
										mentally retarded and such other physically disabled people
										also.
									</p>
								</div>
								<div className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-2 items-center lg:items-start">
									<img src={buildingIcon4} alt="" />
									<p className="text-center lg:text-left">
										To establish and run schools, colleges, skill development
										centers, hostels, libraries etc., and also provide
										scholarship to poor students for their studies.
									</p>
								</div>
								<div className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-2 items-center lg:items-start">
									<img src={buildingIcon2} alt="" />
									<p className="text-center lg:text-left">
										To undertake preservation of environment, including
										water-shed, forests and wildlife and preservation of
										monuments, places or objects of artistic or historic
										interest.
									</p>
								</div>
								<div className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-2 items-center lg:items-start">
									<img src={buildingIcon5} alt="" />
									<p className="text-center lg:text-left">
										To undertake rural development work like developing rural
										schools, roads, environment, organizing medical camps etc.
									</p>
								</div>
								<div className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-2 items-center lg:items-start">
									<img src={buildingIcon3} alt="" />
									<p className="text-center lg:text-left">
										To provide both medical and financial relief to the poor and
										needy.
									</p>
								</div>
								<div className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-2 items-center lg:items-start">
									<img src={buildingIcon6} alt="" />
									<p className="text-center lg:text-left">
										To administer the properties of the Trust in achieving the
										objects mentioned in this Deed.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full xl:w-5/12 h-full flex items-center justify-end overflow-hidden">
							<img
								src={isLarge ? buildingImage1 : buildingImage2}
								alt=""
								className="h-full w-full xl:w-auto object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Building Section ends */}

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
								We aim to administer the properties of the Trust in achieving
								the objectives and
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
}

export default Purpose;