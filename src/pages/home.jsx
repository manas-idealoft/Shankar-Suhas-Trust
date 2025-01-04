import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
	arrow,
	arrowWhite,
	buildingIcon1,
	buildingIcon2,
	buildingIcon3,
	buildingIcon4,
	buildingIcon5,
	buildingIcon6,
	buildingIconMain,
	buildingImage1,
	communityIcon,
	mapIcon,
	purposeIcon,
	quoteMarkIcon,
	statusIcon,
	zoomIcon,
} from "../assets";
import { HeroImageScroll } from "../components";

const Home = () => {
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

	return (
		<div>
			{/* Hero Section starts */}

			<div
				id="hero"
				className=" h-screen md:h-svh flex flex-col gap-6 md:gap-16 xl:justify-between pb-4 md:pb-28 pt-12 md:pt-24 xl:pb-20"
			>
				<div className="flex flex-col xl:flex-row gap-4 md:gap-12 xl:justify-between px-8 md:px-24 pt-24 font-cormorant text-grey">
					<div className="font-medium text-2xl md:text-4xl w-full xl:w-1/3 text-terracotta">
						A Community of Care: <br />
						Empowering Divyang,
						<br />
						Elders, and Beyond
					</div>
					<div className="w-full md:w-2/3 xl:w-2/3 flex flex-col xl:flex-row gap-4 md:gap-8 xl:gap-20">
						<div className="w-full xl:w-7/12 text-base md:text-xl font-light">
							A trust that has made significant strides in fulfilling its
							mission. It has established an{" "}
							<em className="italic font-semibold">old age home</em> in Mysore,
							providing shelter and care to a number of elderly residents.
							Additionally, the trust is actively engaged in the{" "}
							<em className="italic font-semibold">
								construction of a school that will cater to students from all
								backgrounds,
							</em>{" "}
							including those with disabilities.
						</div>
						<div className="hidden md:block w-full xl:w-5/12 text-base md:text-xl font-light">
							If you share the vision of a compassionate and inclusive society,
							please consider supporting the
							<em className="italic font-semibold">Shankar Suhas Trust</em> by
							donating your time or resources.
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
				<div className="w-full md:w-1/3 flex flex-col justify-center items-center ">
					<h6 className="font-cormorant font-light text-terracotta text-base md:text-xl">
						ಕಥೆ | <em className="font-medium italic">ORIGIN</em>
					</h6>
					<h4 className="font-cormorant font-normal text-terracotta text-2xl md:text-3xl text-center">
						The <em className="italic font-light">Heartfelt Journey</em> <br />{" "}
						Behind This Foundation
					</h4>
					<p className="font-cormorant font-medium text-grey text-base md:text-xl my-6 md:mt-12 text-center">
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
					<p className="hidden md:block font-cormorant font-medium text-grey text-xl text-center mt-8">
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
					className={`block md:hidden h-full w-full bg-cover bg-center transition-all duration-1000 ${bgClasses[currentBg]}`}
				></div>
				<div className="w-full h-fit md:w-1/2 xl:w-1/3 py-8 md:py-14 px-8 md:px-20 bg-offwhite">
					<h6 className="font-cormorant font-light text-terracotta text-base md:text-xl">
						ಸಮುದಾಯ | <em className="font-medium italic">COMMUNITY</em>
					</h6>
					<h4 className="font-cormorant font-normal text-grey text-2xl md:text-3xl ">
						Aangan <em className="italic font-light">of</em> Togetherness
					</h4>
					<img
						src={communityIcon}
						alt="Icon showing leaves"
						className="mt-2 md:mt-4 w-8 md:w-14"
					/>
					<p className="font-cormorant font-light text-grey text-base md:text-xl mt-2 md:mt-4">
						In the warmth of our aangan—a cherished Indian courtyard
						tradition—lies a close-knit community that thrives on care,
						togetherness, and shared purpose. It&apos;s a sanctuary where lives
						blossom, values are nurtured, and the spirit of seva binds everyone
						in a tapestry of love and harmony.
					</p>
				</div>
			</div>

			{/* Community Section ends */}

			{/* Status Section starts */}

			<div
				id="status"
				className="h-screen bg-status-bg bg-no-repeat bg-center bg-cover flex items-center justify-center"
			>
				<div className="w-full md:w-1/2 xl:w-1/3 bg-offwhite mx-8 md:mx-0 px-8 md:px-16 py-8 md:py-16 flex flex-col items-center justify-between h-fit gap-8 md:gap-12 xl:gap-0 xl:h-2/3">
					<h6 className="font-cormorant font-light text-terracotta text-base md:text-xl">
						ಸ್ಥಿತಿ | <em className="font-medium italic">STATUS</em>
					</h6>
					<img
						src={statusIcon}
						alt="Icon showing a Flower with two Leaves on the side."
						className="w-16 md:w-28"
					/>
					<p className="font-cormorant font-light text-grey text-base md:text-xl text-center">
						To support its activities, the Trust has acquired
						<em className="italic font-light">
							{" "}
							4 acres and 4 guntas of commercial land
						</em>{" "}
						on the Main District Road connecting Doddakanya and Doddakatur in
						Sindhuvalli Panchayath, Jayapura Hobli, Mysuru Taluk. The land is 8
						km from Mysuru Airport and 5 km from Kadakola &#40;Mysuru-Ooty
						National Highway&#41;.
					</p>
					<a
						href="/public/SuhasShankarTrust_Map.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className=" flex px-4 md:px-7 py-3 md:py-5 bg-beige items-center gap-2 md:gap-4"
					>
						<img src={mapIcon} alt="Map Icon" className="w-3 md:w-6" />
						<p className="font-cormorant font-medium italic text-base md:text-xl">
							View Trust Map
						</p>
						<img src={zoomIcon} alt="Zoom Icon" className="w-3 md:w-6" />
					</a>
				</div>
			</div>

			{/* Status Section ends */}

			{/* Building Section starts */}

			<div
				id="building"
				className="h-full xl:h-svh bg-terracotta bg-building-bg flex flex-col md:gap-8 xl:gap-0 xl:flex-row w-full justify-between items-center xl:items-start"
			>
				<div className="flex flex-col w-full xl:w-3/4 px-8 md:px-24 xl:pl-24 xl:pr-16 py-12 md:pt-24 xl:py-24 gap-8 md:gap-16 justify-between items-center xl:items-start">
					<div className="flex flex-col items-center xl:items-start">
						<h6 className="font-cormorant font-light text-offwhite text-base md:text-xl text-center xl:text-start">
							ನಿರ್ಮಿಸಲು |<em className="font-medium italic">BUILDING</em>
						</h6>
						<h4 className="font-cormorant font-normal text-offwhite text-2xl md:text-4xl text-center xl:text-start">
							Weaving Lives, Nurturing
							<br /> a <em className="italic">Collective Dream</em>
						</h4>
					</div>
					<img
						src={buildingIconMain}
						alt="Icon showing a flower with two leaves popping out from the side."
						className="w-16 md:w-24"
					/>
					<div
						id="building-pointers"
						className="font-cormorant font-light text-offwhite text-base md:text-xl h-fit px-2 flex flex-col gap-6 md:grid md:grid-cols-2 md:auto-rows-min md:gap-8"
					>
						<div className="flex flex-col xl:flex-row gap-2 md:gap-4 items-center md:items-start">
							<img src={buildingIcon1} alt="" />
							<p className="text-center md:text-left">
								To establish and run a centre for the welfare of old and
								divyanga, The word divyanga shall include slow-learners,
								mentally retarded and such other physically disabled people
								also.
							</p>
						</div>
						<div className="flex flex-col xl:flex-row gap-2 md:gap-4 items-center md:items-start">
							<img src={buildingIcon4} alt="" />
							<p className="text-center md:text-left">
								To establish and run schools, colleges, skill development
								centers, hostels, libraries etc., and also provide scholarship
								to poor students for their studies.
							</p>
						</div>
						<div className="flex flex-col xl:flex-row gap-2 md:gap-4 items-center md:items-start">
							<img src={buildingIcon2} alt="" />
							<p className="text-center md:text-left">
								To undertake preservation of environment, including water-shed,
								forests and wildlife and preservation of monuments, places or
								objects of artistic or historic interest.
							</p>
						</div>
						<div className="flex flex-col xl:flex-row gap-2 md:gap-4 items-center md:items-start">
							<img src={buildingIcon5} alt="" />
							<p className="text-center md:text-left">
								To undertake rural development work like developing rural
								schools, roads, environment, organizing medical camps etc.
							</p>
						</div>
						<div className="flex flex-col xl:flex-row gap-2 md:gap-4 items-center md:items-start">
							<img src={buildingIcon3} alt="" />
							<p className="text-center md:text-left">
								To provide both medical and financial relief to the poor and
								needy.
							</p>
						</div>

						<div className="flex flex-col xl:flex-row gap-2 md:gap-4 items-center md:items-start">
							<img src={buildingIcon6} alt="" />
							<p className="text-center md:text-left">
								To administer the properties of the Trust in achieving the
								objects mentioned in this Deed.
							</p>
						</div>
					</div>
				</div>
				<img
					src={buildingImage1}
					alt="Image of volunteers with various old people who are sitting."
					className="h-full md:w-full"
				/>
			</div>

			{/* Building Section ends */}

			{/* Purpose Section starts */}

			<div
				id="purpose"
				className="h-full md:h-screen bg-purpose-bg bg-no-repeat bg-bottom bg-[length:300%] md:bg-cover flex justify-center pb-64"
			>
				<div className="w-full md:w-3/4 xl:w-2/3 flex flex-col items-center mt-12 md:mt-24 gap-4 xl:gap-8">
					<img
						src={purposeIcon}
						alt="Icon showing two sets of leaves"
						className="w-16 md:w-28"
					/>
					<h6 className="font-cormorant font-light text-terracotta text-base md:text-xl">
						ಉದ್ದೇಶ | <em className="font-medium italic">PURPOSE</em>
					</h6>
					<h4 className="font-cormorant font-medium text-grey md:text-[#003a3e] text-2xl md:text-4xl">
						How do we see <em className="italic">ourselves</em>
					</h4>
					<div className="flex flex-col md:flex-row gap-8 xl:gap-16 font-cormorant font-normal text-grey text-base md:text-xl text-justify bg-none md:bg-white/50 px-12 xl:px-16 py-0 md:py-8 xl:py-20 md:mt-16 xl:mt-0 backdrop-blur-0 md:backdrop-blur-sm">
						<p>
							We embark on a mission, to light the path for every Divyang soul
							with the transformative power of education. In this gurukul of
							inclusivity, we empower every individual, regardless of their
							challenges, through compassion, acceptance, and guidance. Every
							mind here is unique, and every dream is possible with the strength
							of community and a commitment to learning.
						</p>
						<div className="hidden md:block w-4 h-full divider"></div>
						<p>
							In the spirit of ancient Indian wisdom, we dream of creating a
							humble sanctuary—a true aangan—where our elders are not just cared
							for but deeply cherished. Here, every wrinkle tells a story, every
							laugh is a blessing, and every soul is honored with respect. This
							vision is more than a place; it is a space of warmth, joy, and
							dignity, where age is not a burden but a treasure.
						</p>
					</div>
				</div>
			</div>

			{/* Purpose Section ends */}

			{/* Currently Section starts */}

			<div
				id="currently"
				className="h-full xl:h-screen bg-currently-bg  bg-no-repeat bg-center bg-cover flex items-center justify-center py-12 md:py-16 xl:py-0"
			>
				<div className="flex flex-col gap-4 md:gap-8 items-center md:items-start">
					<h6 className="font-cormorant font-light text-terracotta text-base md:text-xl">
						ಇದೀಗ | <em className="font-medium italic">CURRENTLY</em>
					</h6>
					<h4 className="font-cormorant font-normal text-grey text-2xl md:text-3xl">
						Where we are{" "}
						<em className=" font-light italic">
							<br className="hidden md:block" />
							right now
						</em>
					</h4>
					<p className="font-cormorant font-normal text-grey text-base md:text-xl">
						The Trust is having exemptions <br className="hidden md:block" />
						for donations under:
					</p>
					<div className="flex flex-col font-cormorant text-base md:text-xl italic px-8 md:px-0">
						<div className="flex w-full">
							<div className="border-l border-t border-grey w-1/3 py-2 px-2 font-medium">
								Income Tax Act:
							</div>
							<div className="border-t border-x border-grey w-2/3 py-2 px-2 font-semibold text-terracotta">
								80G
							</div>
						</div>
						<div className="flex">
							<div className="border-l border-t border-grey w-1/3 py-2 px-2 font-medium">
								Registered Under:
							</div>
							<div className="border-t border-x border-grey w-2/3 py-2 px-2 font-semibold text-terracotta">
								“Darpan” Ministry of Planning, Government of India
							</div>
						</div>
						<div className="flex">
							<div className="border-l border-t border-grey w-1/3 py-2 px-2 font-medium">
								Unique ID:
							</div>
							<div className="border-t border-x border-grey w-2/3 py-2 px-2 font-semibold text-terracotta">
								KA/2024/0427228dated 25-6-2024
							</div>
						</div>
						<div className="flex">
							<div className="border-l border-t border-grey w-1/3 py-2 px-2 font-medium">
								Trust&apos;s C.S.R Registr. Number
							</div>
							<div className="border-t border-x border-grey w-2/3 py-2 px-2 font-semibold text-terracotta">
								CSR00076779
							</div>
						</div>
						<div className="flex">
							<div className="border-l border-y border-grey w-1/3 py-2 px-2 font-medium">
								C.S.R Number Registr. At
							</div>
							<div className="border border-grey w-2/3 py-2 px-2 font-semibold text-terracotta">
								Office of the Registrar of the Companies, Ministry of Corporate
								Affairs, Government of India.
							</div>
						</div>
					</div>
					<Link
						to="/contribute"
						className="flex py-2 md:py-4 px-4 md:px-8 bg-terracotta rounded-md md:rounded-lg w-fit items-center gap-2 md:gap-4 mt-4 md:mt-0"
					>
						<p className="font-cormorant text-white font-normal text-base md:text-xl">
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
				className=" relative h-screen bg-creators-bg bg-no-repeat bg-bottom bg-[length:375%] md:bg-cover flex flex-col md:flex-row items-start md:items-end w-full px-8 md:px-24 pt-24 pb-8 md:py-16 justify-between gap-8 md:gap-0"
			>
				<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-10"></div>
				<div className="flex flex-col justify-between h-full gap-4 md:gap-12 w-full md:w-3/5 xl:w-2/5 z-20">
					<h6 className="font-cormorant font-light text-offwhite text-base md:text-xl">
						ತಯಾರಕರು | <em className="font-medium italic">CREATORS</em>
					</h6>
					<div className="flex flex-col gap-4 md:gap-12">
						<img
						src={quoteMarkIcon}
						alt="Icon showing double quote mark"
						className="w-24 md:w-44"
					/>
					<h4 className="font-cormorant font-light text-offwhite text-2xl md:text-5xl leading-normal">
						We aim to administer the properties of the Trust in achieving the
						objectives and
						<em className="italic">
							&nbsp;make this world a more accessible place to live
						</em>
					</h4>
					<div>
						<h5 className="font-cormorant font-medium text-offwhite text-base md:text-xl">
							- Ishwara and Shankar Bhat
						</h5>
						<p className="font-cormorant font-light text-offwhite text-sm md:text-lg pl-2">
							Founders, Shankar Suhas Trust
						</p>
					</div></div>
				</div>
				<Link
					to="/trustees"
					className="flex py-2 md:py-4 px-4 md:px-8 bg-offwhite rounded-md md:rounded-lg w-fit items-center gap-2 z-20"
				>
					<p className="font-cormorant text-terracotta font-normal text-base md:text-xl">
						Connect to contribute
					</p>
					<img src={arrow} alt="Arrow Icon" className="w-5" />
				</Link>
			</div>

			{/* Creators Section ends */}
		</div>
	);
};

export default Home;
