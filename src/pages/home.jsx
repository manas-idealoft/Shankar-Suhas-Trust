import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
	arrowRight,
	arrowWhite,
	buildingIcon1,
	buildingIcon2,
	buildingIcon3,
	buildingIcon4,
	buildingIcon5,
	buildingIcon6,
	buildingIconMain,
	buildingImage1,
	buildingImage2,
	communityIcon,
	heroImage3,
	heroImage6,
	heroImage7,
	purposeIcon,
	quoteMarkIcon,
} from "../assets";
import { HeroImageScroll, TrusteePopUp } from "../components";

const Home = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// Function to open popup
	const openPopup = () => setIsPopupOpen(true);
	// Function to close popup
	const closePopup = () => setIsPopupOpen(false);

	const bgClasses = [
		"bg-com-section-1",
		"bg-com-section-2",
		"bg-com-section-3",
	];
	const [currentBg, setCurrentBg] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentBg((prev) => (prev + 1) % bgClasses.length);
		}, 5000); // Change every 5 seconds

		return () => clearInterval(interval);
	}, []);

	const [isLarge, setIsLarge] = useState(window.innerWidth > 1280);

	useEffect(() => {
		const handleResize = () => setIsLarge(window.innerWidth > 1280);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div>
			{/* Hero Section starts */}

			<div
				id="hero"
				className=" h-screen md:h-svh flex flex-col gap-6 md:gap-16 justify-evenly xl:justify-between pb-4 md:pb-28 pt-12 md:pt-24 xl:pb-20"
			>
				<div className="flex flex-col xl:flex-row gap-4 md:gap-12 xl:justify-between px-8 md:px-24 pt-24 font-cormorant text-grey">
					<div className="font-medium text-2xl md:text-4xl w-full xl:w-1/3 text-brown">
						Nurturing Futures: <br />
						An Inclusive School and <br />
						Community for Every Learner
					</div>
					<div className="w-full md:w-2/3 xl:w-2/3 flex flex-col xl:flex-row gap-4 md:gap-8 xl:gap-20">
						<div className="w-full xl:w-7/12 text-lg md:text-xl font-light">
							The Shankar Suhas Trust is dedicated to expanding access to&nbsp;
							<em className="italic font-medium">
								education for the underserved.{" "}
							</em>
							It is actively building an inclusive school to empower students of
							all backgrounds, while also fostering opportunities for{" "}
							<em className="italic font-medium">
								skill development and holistic learning.
							</em>{" "}
						</div>
						<div className="hidden lg:block w-full xl:w-5/12 text-lg md:text-xl font-light">
							The Trust has also established an old age home in Mysuru,
							offering&nbsp;
							<em className="italic font-semibold">
								shelter and care to elderly residents.
							</em>{" "}
							Join us in creating a more inclusive future by supporting the
							Trust with your time or resources.
						</div>
					</div>
				</div>
				<HeroImageScroll />
			</div>

			{/* Hero Section ends */}

			{/* Origin Section starts */}

			<div
				id="origin"
				className="h-screen md:h-svh flex px-8 md:px-0 justify-center"
			>
				<div className="w-full md:w-2/3 xl:w-1/3 flex flex-col justify-center items-start md:items-center ">
					<h6 className="font-cormorant font-light text-brown text-lg md:text-xl">
						ಕಥೆ | <em className="font-medium italic">ORIGIN</em>
					</h6>
					<h4 className="font-cormorant font-medium text-brown text-2xl md:text-3xl text-start md:text-center">
						The <em className="italic font-medium">Heartfelt Journey</em> <br />{" "}
						Behind This Foundation
					</h4>
					<p className="font-cormorant font-light text-grey text-lg md:text-xl mb-3 mt-6 md:mb-6 md:mt-12 text-start md:text-center">
						The founders of the Shankar Suhas Trust, K. Ishwara Bhat, a retired
						Principal from the Directorate of Education, Government of N.C.T. of
						Delhi, and Mrs. Ganga Bhat, a retired officer from a nationalized
						bank, established this Trust out of deep compassion and a spirit of
						seva. Being parents to two autistic sons, they witnessed firsthand
						the struggles faced by Divyang individuals and the downtrodden,
						often compounded by society&apos;s apathy. Moved by these
						experiences and driven by a desire to serve, they registered the
						Trust in 2018 in Mysuru, Karnataka, under the Indian Registration
						Act.
					</p>
					<p className="font-cormorant font-light text-grey text-lg md:text-xl mb-6 mt-3 md:mb-12 md:mt-6 text-start md:text-center">
						The Trust, named after their sons, Shankar and Suhas, stands as a
						beacon of hope, striving to foster inclusion, dignity, and care for
						the differently-abled and the underprivileged.
					</p>
				</div>
			</div>

			{/* Origin Section ends */}

			{/* Community Section starts */}

			<div
				id="community"
				className={`h-screen flex flex-col md:flex-row justify-end items-center md:items-end md:bg-cover bg-center transition-all duration-1000 ${bgClasses[currentBg]}`}
			>
				<div
					className={`block md:hidden h-4/6 w-full bg-cover bg-center transition-all duration-1000 ${bgClasses[currentBg]}`}
				></div>
				<div className="w-full h-3/6 md:h-fit md:w-1/2 xl:w-1/3 py-8 md:py-14 px-8 md:px-20 bg-offwhite overflow-y-auto">
					<h6 className="font-cormorant font-light text-brown text-lg md:text-xl">
						ಸಮುದಾಯ | <em className="font-medium italic">COMMUNITY</em>
					</h6>
					<h4 className="font-cormorant font-normal text-grey text-2xl md:text-3xl ">
						Aangan <em className="italic font-normal">of</em> Togetherness
					</h4>
					<img
						src={communityIcon}
						alt="Icon showing leaves"
						className="mt-2 md:mt-4 w-8 md:w-14"
					/>
					<p className="font-cormorant font-light text-grey text-lg md:text-xl mt-2 md:mt-4">
						In the warmth of our aangan—a cherished Indian courtyard
						tradition—lies a close-knit community that thrives on care,
						togetherness, and shared purpose. It&apos;s a sanctuary where lives
						blossom, values are nurtured, and the spirit of seva binds everyone
						in a tapestry of love and harmony.
					</p>
				</div>
			</div>

			{/* Community Section ends */}

			{/* Learning Section starts */}

			<div
				id="learning"
				className="h-full md:h-screen bg-status-bg bg-no-repeat bg-center bg-cover flex flex-col px-8 md:px-12 lg:px-24 items-center justify-center gap-4 md:gap-16 lg:gap-20 xl:gap-24 py-12"
			>
				<div className="flex flex-col xl:flex-row justify-between w-full items-start md:items-center lg:items-start xl:items-center gap-4 md:gap-8">
					<div className="flex flex-col text-start md:items-center xl:items-start w-full xl:w-5/12 gap-4">
						<h6 className="font-cormorant font-light text-terracotta text-lg md:text-xl text-start md:text-center xl:text-start">
							ಕಲಿಕೆ | <em className="font-medium italic">LEARNING</em>
						</h6>
						<h4 className="font-cormorant font-normal text-grey text-2xl md:text-4xl text-start md:text-center xl:text-start">
							<em className="italic">A School for All: </em>{" "}
							<br className="block md:hidden" />
							Learning with <br />
							Dignity, Growth with Inclusion
						</h4>
					</div>
					<div className="w-full md:w-2/3 lg:w-full xl:w-6/12 text-lg lg:text-2xl xl:text-xl font-light font-cormorant text-start md:text-center xl:text-start">
						The Shankar Suhas Trust is building an&nbsp;
						<em className="italic font-medium">inclusive school </em>
						where education transcends barriers. Rooted in{" "}
						<em className="italic font-medium">sneh (affection)</em> and{" "}
						<em className="italic font-medium">seva (service),</em> this space
						welcomes children from all backgrounds, ensuring Divyang students
						and underserved communities receive equal opportunities to learn and
						grow.
					</div>
				</div>
				<div className="flex flex-col md:flex-row flex-nowrap justify-center gap-4 w-full ">
					<img
						src={heroImage3}
						alt=""
						className="w-full md:w-1/3 min-w-0 object-cover"
					/>
					<img
						src={heroImage7}
						alt=""
						className="w-full md:w-1/3 min-w-0 object-cover"
					/>
					<img
						src={heroImage6}
						alt=""
						className="w-full md:w-1/3 min-w-0 object-cover"
					/>
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
									To establish and run a centre for the welfare of old and
									divyanga, The word divyanga shall include slow-learners,
									mentally retarded and such other physically disabled people
									also.
								</p>
							</div>
							<div className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-2 items-center lg:items-start">
								<img src={buildingIcon4} alt="" />
								<p className="text-center lg:text-left">
									To establish and run schools, colleges, skill development
									centers, hostels, libraries etc., and also provide scholarship
									to poor students for their studies.
								</p>
							</div>
							<div className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-2 items-center lg:items-start">
								<img src={buildingIcon2} alt="" />
								<p className="text-center lg:text-left">
									To undertake preservation of environment, including
									water-shed, forests and wildlife and preservation of
									monuments, places or objects of artistic or historic interest.
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

			{/* Purpose Section starts */}

			<div
				id="purpose"
				className="h-full lg:h-screen bg-purpose-bg bg-no-repeat bg-bottom bg-[length:300%] md:bg-cover flex justify-center pb-64"
			>
				<div className="w-full md:w-3/4 xl:w-2/3 px-12 flex flex-col items-center mt-12 lg:mt-24 gap-4 xl:gap-8">
					<img
						src={purposeIcon}
						alt="Icon showing two sets of leaves"
						className="w-16 lg:w-28"
					/>
					<h6 className="font-cormorant font-light text-brown text-lg lg:text-xl">
						ಉದ್ದೇಶ | <em className="font-medium italic">PURPOSE</em>
					</h6>
					<h4 className="font-cormorant font-medium text-grey md:text-[#003a3e] text-2xl lg:text-4xl text-center">
						A Tapestry of&nbsp;
						<em className="italic">Inclusion and Care</em>
					</h4>
					<div className="flex flex-col md:flex-row gap-4 xl:gap-8 font-cormorant font-normal text-grey text-lg lg:text-xl text-justify bg-white/50 px-4 xl:px-16 py-4 md:py-6 xl:py-16 md:mt-8 lg:mt-16 xl:mt-0 backdrop-blur-sm">
						<div className="w-full xl:w-1/2">
							<p>
								We walk the path of seva, shaping a future where education
								becomes the bridge to empowerment. This gurukul of inclusivity
								nurtures every learner—Divyang and underserved alike—through
								compassion, acceptance, and knowledge. Every mind is unique, and
								every dream is within reach when supported by a community that
								uplifts and nurtures.
							</p>
						</div>
						<div className="hidden md:block w-1 h-full divider"></div>
						<div className="w-full xl:w-1/2">
							<p>
								Rooted in ancient Indian wisdom, we envision a true aangan—a
								sanctuary where our elders are honored, their wisdom cherished,
								and their presence celebrated.
							</p>
							<p className="pt-4">
								This is more than a mission; it is a movement to create and grow
								a space where learning, dignity, and belonging thrive.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Purpose Section ends */}

			{/* Currently Section starts */}

			<div
				id="currently"
				className="h-full lg:h-screen bg-currently-bg  bg-no-repeat bg-center bg-cover flex items-center justify-center px-8 md:px-24 py-12 md:py-16 xl:py-0"
			>
				<div className="flex flex-col gap-4 md:gap-6 items-start">
					<h6 className="font-cormorant font-light text-terracotta text-lg md:text-xl">
						ಇದೀಗ | <em className="font-medium italic">CURRENTLY</em>
					</h6>
					<h4 className="font-cormorant font-normal text-grey text-2xl md:text-4xl">
						Details to&nbsp;
						<em className=" font-light italic">join in this deed</em>
					</h4>
					<p className="font-cormorant font-normal text-grey text-lg md:text-xl">
						The Trust is having exemptions <br className="hidden md:block" />
						for donations under:
					</p>
					<div className="flex flex-col font-cormorant text-lg md:text-xl italic">
						<div className="flex w-full">
							<div className="border-l border-t border-[#00000025] w-1/3 py-4 px-4 font-medium">
								Income Tax Act:
							</div>
							<div className="border-t border-x border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								80G
							</div>
						</div>
						<div className="flex">
							<div className="border-l border-t border-[#00000025] w-1/3 py-4 px-4 font-medium">
								Registered Under:
							</div>
							<div className="border-t border-x border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								“Darpan” Ministry of Planning, Government of India
							</div>
						</div>
						<div className="flex">
							<div className="border-l border-t border-[#00000025] w-1/3 py-4 px-4 font-medium">
								Unique ID:
							</div>
							<div className="border-t border-x border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								KA/2024/0427228dated 25-6-2024
							</div>
						</div>
						<div className="flex">
							<div className="border-l border-t border-[#00000025] w-1/3 py-4 px-4 font-medium">
								Trust&apos;s C.S.R Registr. Number
							</div>
							<div className="border-t border-x border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								CSR00076779
							</div>
						</div>
						<div className="flex">
							<div className="border-l border-y border-[#00000025] w-1/3 py-4 px-4 font-medium">
								C.S.R Number Registr. At
							</div>
							<div className="border border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								Office of the Registrar of the Companies, Ministry of Corporate
								Affairs, Government of India.
							</div>
						</div>
					</div>
					<Link
						to="/contribute"
						onClick={() => {
							setTimeout(() => {
								const topElement = document.getElementById("origin");
								if (topElement) {
									topElement.scrollIntoView({ behavior: "smooth" });
								}
							}, 100);
						}}
						className="flex py-2 md:py-4 px-4 md:px-8 bg-terracotta rounded-md md:rounded-lg w-fit items-center gap-2 md:gap-4 mt-4 md:mt-0"
					>
						<p className="font-cormorant text-white font-normal text-lg md:text-xl">
							Connect to contribute
						</p>
						<img src={arrowWhite} alt="Arrow Icon" className="w-3 md:w-5" />
					</Link>
				</div>
			</div>

			{/* Currently Section ends */}

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

export default Home;
