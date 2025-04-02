import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
	arrowWhite,
	buildingIcon1,
	buildingIcon4,
	communityIcon,
	guidingForce,
	originImage10,
	originImage12,
	originImgIcon,
} from "../assets";
import { ImageSlideshow } from "../components";

const Home = () => {
	const bgClasses = [
		"bg-com-section-1",
		"bg-com-section-2",
		"bg-com-section-3",
	];
	const [currentBg, setCurrentBg] = useState(0);
	const [heroState, setHeroState] = useState("Welfare");
	const [currentImage, setCurrentImage] = useState(originImage10);

    useEffect(() => {
			setCurrentImage(heroState === "Welfare" ? originImage10 : originImage12);
		}, [heroState]);

		useEffect(() => {
			const intervalId = setInterval(() => {
				setTimeout(() => {
					setHeroState((prev) =>
						prev === "Welfare" ? "Education" : "Welfare"
					);
				}, 500);
			}, 5000);

			return () => clearInterval(intervalId);
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
				className="h-full md:min-h-svh pb-8 pt-36 md:pt-40 xl:pt-36 xl:pb-20 bg-hero-bg bg-[center_bottom_-8rem] bg-no-repeat xl:bg-none flex flex-col xl:flex-row gap-8 xl:justify-start px-8 md:px-24 font-cormorant text-grey "
			>
					<div className="xl:bg-hero-bg xl:bg-[center_bottom_-8rem] bg-cover] bg-no-repeat font-normal text-grey md:text-xl w-full xl:w-1/2 flex flex-col gap-8 xl:gap-2 justify-between h-[90svh] xl:py-24">
						<div className="flex flex-col gap-2 md:gap-4 lg:gap-8">
							<h6 className="font-cormorant font-light text-terracotta text-lg md:text-xl">
								ಬಗ್ಗೆ | <em className="font-medium italic">ABOUT</em>
							</h6>
							<h3 className="font-normal md:font-semibold text-5xl text-brown">
								Nurturing Futures
							</h3>
							<p className="text-lg md:text-2xl lg:text-3xl xl:text-2xl">
								{heroState === "Welfare"
									? "Shankar Suhas Trust is mainly dedicated to establish a facility center for the welfare of the old and the divyang."
									: "Also to establish institution for general education, with  emphasis on the integration of the divyang students."}
							</p>
						</div>
						<div className="flex xl:hidden w-full h-96 lg:h-[42rem] items-center justify-center relative">
							<img
								key={currentImage}
								src={currentImage}
								alt=""
								className="h-full object-cover aspect-[40/19] transition-opacity duration-500 absolute inset-0"
							/>
						</div>

						<div className="flex flex-col md:flex-row gap-4 w-full font-cormorant font-medium text-lg md:text-xl pt-0 md:pt-8 lg:pt-12 xl:pt-0">
							<div
								onClick={() => {
									setHeroState("Welfare");
								}}
								className={`${
									heroState === "Welfare"
										? "opacity-100 border-t-2 border-brown"
										: "opacity-40 border-t border-grey"
								} flex gap-2 md:gap-4 items-start w-full md:w-1/2 px-1 py-2 md:px-2 md:py-4 `}
							>
								<img src={buildingIcon1} alt="" className="w-6 md:w-10" />
								<p>A Facility Center for the Welfare of the Old & Divyang</p>
							</div>
							<div
								onClick={() => {
									setHeroState("Education");
								}}
								className={`${
									heroState === "Education"
										? "opacity-100 border-t-2 border-brown"
										: "opacity-40 border-t border-grey"
								} flex gap-2 md:gap-4 items-start w-full md:w-1/2 px-1 py-2 md:px-2 md:py-4 `}
							>
								<img src={buildingIcon4} alt="" className="w-6 md:w-10" />
								<p>A Center for Education</p>
							</div>
						</div>
					</div>
					<div className="hidden xl:flex w-full xl:w-1/2 h-[90svh]] items-center justify-center relative">
						<img
							key={currentImage}
							src={currentImage}
							alt=""
							className="h-full object-cover aspect-[40/19] transition-opacity duration-500 absolute inset-0"
						/>
					</div>

			</div>
			{/* Hero Section ends */}

			{/* Origin Section starts */}
			<div
				id="origin"
				className=":min-h-screen flex px-8 md:px-24 justify-start py-12 lg:py-24"
			>
				<div className="w-full flex flex-col justify-start items-start gap-4 object-contain">
					<h6 className="font-cormorant font-light text-terracotta text-lg md:text-xl">
						ಕಥೆ | <em className="font-medium italic">ORIGIN</em>
					</h6>
					<h4 className="font-cormorant font-medium text-brown text-3xl md:text-5xl text-start">
						The <em className="italic font-medium">Heartfelt Journey</em>
						<br />
						Behind This Trust
					</h4>
					<div className="flex flex-col xl:flex-row pt-8 lg:pt-12 gap-8 lg:gap-16 justify-between items-center md:items-start xl:items-center">
						<div className="relative flex-shrink-0 flex flex-col">
							<img
								src={guidingForce}
								alt="Shankar and Suhas Bhat"
								className="block max-w-full object-contain"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
							<div className="absolute bottom-4 left-4 text-white text-lg font-bold pointer-events-none flex gap-2">
								<img src={originImgIcon} alt="" className="w-4 md:w-6" />
								<p className="font-cormorant italic font-bold text-xl lg:text-2xl">
									Inspiration & Guiding Force
								</p>
							</div>
						</div>
						<div className="w-full xl:w-2/3 font-cormorant font-normal text-grey text-lg md:text-xl lg:text-2xl xl:text-xl text-start md:text-justify flex flex-col gap-4 md:gap-8">
							<p>
								The founders of the Shankar Suhas Trust, K. Ishwara Bhat, a
								retired Principal from the Directorate of Education, Government
								of N.C.T. of Delhi, and Mrs. Ganga Bhat, a retired officer from
								a nationalized bank, established this Trust out of deep
								compassion and a spirit of seva.
							</p>
							<p>
								Being parents to two autistic sons, they witnessed firsthand the
								struggles faced by Divyang individuals and the downtrodden,
								often compounded by society&apos;s apathy. Moved by these
								experiences and driven by a desire to serve, they registered the
								Trust in 2018 in Mysuru, Karnataka, under the Indian
								Registration Act.
							</p>
							<p>
								The Trust, named after their sons, Shankar and Suhas, stands as
								a beacon of hope, striving to foster inclusion, dignity, and
								care for the differently-abled and the underprivileged.
							</p>
						</div>
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

			{/* Activities Section begins */}
			<div
				id="activities"
				className="h-full overflow-y-auto relative px-8 md:px-24 flex flex-col object-contain justify-center"
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

			{/* Currently Section starts */}

			<div
				id="currently"
				className="h-full lg:min-h-screen bg-currently-bg  bg-no-repeat bg-center bg-cover flex items-center justify-center px-8 md:px-24 py-12 md:py-16 xl:py-24"
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
							<div className="border-l border-t border-[#00000025] w-1/3 py-4 px-4 font-medium">
								C.S.R Number Registr. At
							</div>
							<div className="border-t border-x border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								Office of the Registrar of the Companies, Ministry of Corporate
								Affairs, Government of India.
							</div>
						</div>
						<div className="flex">
							<div className="border-l border-y border-[#00000025] w-1/3 py-4 px-4 font-medium">
								Account Details
							</div>
							<div className="border border-[#00000025] w-2/3 py-4 px-4 font-semibold text-brown">
								Bank: Union Bank of India <br />
								Branch: Devarajurs Road Mysore <br />
								IFSC code: UBIN0808695 <br />
								Account no: 0869 1010 0064 768 <br />
								Name: Shankar Suhas Charitable Trust (R)
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
		</div>
	);
};

export default Home;
