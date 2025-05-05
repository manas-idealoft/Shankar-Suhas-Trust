import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
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
	guidingForce,
} from "../assets";

const Home = () => {
	const bgClasses = [
		"bg-com-section-1",
		"bg-com-section-2",
		"bg-com-section-3",
	];
	const [currentBg, setCurrentBg] = useState(0);
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0.1, 0.8], ["-250%", "-50%"]);

	const [isLarge, setIsLarge] = useState(window.innerWidth > 1280);

	useEffect(() => {
		const handleResize = () => setIsLarge(window.innerWidth > 1280);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentBg((prev) => (prev + 1) % bgClasses.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []); // Run only on mount

	return (
		<div>
			{/* Hero Section starts */}
			<div
				id="hero"
				className="h-[200vh] relative bg-hero-bg-1 bg-no-repeat bg-cover bg-top  font-cormorant text-grey pb-44"
			>
				<div className=" h-screen  top-0 sticky font-normal text-grey md:text-xl w-full flex flex-col gap-8 xl:gap-2 items-center justify-center xl:py-24">
					<div className="flex flex-col gap-2 md:gap-4 lg:gap-8 items-center w-full md:w-2/3 lg:w-1/2">
						<img
							src={communityIcon}
							alt="Icon showing leaves"
							className="mt-2 md:mt-4 w-8 md:w-14"
						/>
						<h6 className="font-cormorant font-light text-terracotta text-lg md:text-xl text-center">
							ಬಗ್ಗೆ | <em className="font-medium italic">ABOUT</em>
						</h6>
						<h3 className="font-normal md:font-semibold text-3xl lg:text-5xl text-brown text-center">
							A Facility Center for welfare <br />
							of Old & Divyang
						</h3>
						<p className="text-lg md:text-2xl lg:text-3xl xl:text-2xl text-center w-3/4">
							Shankar Suhas Trust is mainly dedicated to establish a{" "}
							<em className="font-bold not-italic">
								facility center for the welfare of the old and the divyang.
							</em>
						</p>
						<p className="text-lg md:text-2xl lg:text-3xl xl:text-2xl text-center w-3/4">
							Also to establish institution for general education, with{" "}
							<em className="font-bold not-italic">
								emphasis on the integration of the divyang students.
							</em>
						</p>
					</div>
				</div>
			</div>
			{/* Hero Section ends */}

			{/* Origin Section starts */}
			<div id="origin" ref={targetRef} className="relative h-[300vh] ">
				<div className="sticky top-0 h-screen px-8 md:px-24 py-4 lg:py-24 flex flex-col lg:flex-row items-center justify-start lg:justify-evenly bg-origin-bg bg-no-repeat bg-cover">
					<div className="w-full lg:w-1/2 h-2/3 lg:h-full relative flex items-center justify-center overflow-hidden">
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card-bg bg-cover bg-right-top bg-no-repeat border-grey/15 border-2 w-10/12 md:w-3/4 xl:w-2/3 h-4/5 p-4 md:p-8 rotate-3 flex flex-col gap-2 lg:gap-4 xl:gap-8 z-10">
							<h6 className="font-cormorant font-light text-terracotta text-base md:text-lg lg:text-2xl ">
								ಕಥೆ | <em className="font-medium italic">ORIGIN</em>
							</h6>
							<h4 className="font-cormorant font-medium text-brown text-2xl lg:text-4xl  text-start">
								The <em className="italic font-medium">Heartfelt Journey</em>
								<br />
								Behind This Trust
							</h4>
							<p className="font-cormorant text-base lg:text-xl">
								The founders of the Shankar Suhas Trust, K. Ishwara Bhat, a
								retired Principal from the Directorate of Education, Government
								of N.C.T. of Delhi, and Mrs. Ganga Bhat, a retired officer from
								a nationalized bank, established this Trust out of deep
								compassion and a spirit of seva. Being parents to two autistic
								sons, they witnessed firsthand the struggles faced by Divyang
								individuals and the downtrodden, often compounded by
								society&apos;s apathy.
							</p>
						</div>
						<motion.div
							style={{ x }}
							className="absolute top-[12.5%] left-1/2 transform -translate-x-1/2  bg-beige bg-cover bg-right-top bg-no-repeat border-grey/15 border-2 w-10/12 md:w-3/4 xl:w-2/3 h-4/5 p-4 md:p-8 flex flex-col gap-2 lg:gap-4 xl:gap-8 z-20"
						>
							<h6 className="font-cormorant font-light text-terracotta text-base md:text-lg lg:text-2xl ">
								ಕಥೆ | <em className="font-medium italic">ORIGIN</em>
							</h6>
							<h4 className="font-cormorant font-medium text-brown text-2xl lg:text-4xl  text-start">
								The <em className="italic font-medium">Heartfelt Journey</em>
								<br />
								Behind This Trust
							</h4>
							<p className="font-cormorant text-base lg:text-xl">
								Moved by these experiences and driven by a desire to serve, they
								registered the Trust in 2018 in Mysuru, Karnataka, under the
								Indian Registration Act. The Trust, named after their sons,
								Shankar and Suhas, stands as a beacon of hope, striving to
								foster inclusion, dignity, and care for the differently-abled
								and the underprivileged.
							</p>
						</motion.div>
					</div>
					<div className="h-1/3 lg:h-full w-full lg:w-1/2 flex-shrink-0 flex flex-col items-center justify-center">
						<img
							src={guidingForce}
							alt="Shankar and Suhas Bhat"
							className="block max-h-full lg:max-w-full object-contain"
						/>
					</div>
				</div>
			</div>
			{/* Origin Section ends */}

			{/* Community Section starts */}
			<div
				id="community"
				className={`min-h-screen flex flex-col md:flex-row justify-end items-center md:items-end md:bg-cover bg-center transition-all duration-1000 ${bgClasses[currentBg]}`}
			>
				<div
					className={`block md:hidden h-4/6 w-full bg-cover bg-center transition-all duration-1000 ${bgClasses[currentBg]}`}
				></div>
				<div className="w-full h-3/6 md:h-fit md:w-1/2 xl:w-1/3 py-8 lg:py-14 px-8 lg:px-20 bg-offwhite overflow-y-auto">
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

			{/* Currently Section starts */}
			<div
				id="currently"
				className="h-full lg:min-h-screen w-full bg-currently-bg  bg-no-repeat bg-center bg-cover flex items-center justify-center px-8 md:px-16 lg:px-24 py-12 md:py-16 xl:py-24"
			>
				<div className="flex flex-col w-full md:w-10/12 lg:w-4/6 gap-4 md:gap-6 items-start">
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
					<div className="flex flex-col font-cormorant text-lg md:text-xl italic w-full">
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
					<h4 className="font-cormorant font-normal text-grey text-2xl md:text-4xl pt-8">
						Bank Details
					</h4>
					<div className="flex flex-col font-cormorant text-lg md:text-xl italic w-full">
						<div className="flex w-full">
							<div className="border-l border-t border-[#00000025] w-1/3 py-4 px-4 font-medium">
								Bank Name:
							</div>
							<div className="border-t border-x border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								Union Bank of India
							</div>
						</div>
						<div className="flex w-full">
							<div className="border-l border-t border-[#00000025] w-1/3 py-4 px-4 font-medium">
								Branch:
							</div>
							<div className="border-t border-x border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								D Devaraj Urs Road, Mysore
							</div>
						</div>
						<div className="flex w-full">
							<div className="border-l border-t border-[#00000025] w-1/3 py-4 px-4 font-medium">
								IFSC Code:
							</div>
							<div className="border-t border-x border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								UBIN0808695
							</div>
						</div>
						<div className="flex w-full">
							<div className="border-l border-t border-[#00000025] w-1/3 py-4 px-4 font-medium">
								Account Number:
							</div>
							<div className="border-t border-x border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								0869 1010 00647 68
							</div>
						</div>
						<div className="flex w-full">
							<div className="border-l border-y border-[#00000025] w-1/3 py-4 px-4 font-medium">
								Account Name:
							</div>
							<div className="border border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								Shankar Suhas Charitable Trust (R)
							</div>
						</div>
					</div>
					<Link
						to="/contribute"
						onClick={() => {
							setTimeout(() => {
								const topElement = document.getElementById("contribute");
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
		</div>
	);
};

export default Home;
