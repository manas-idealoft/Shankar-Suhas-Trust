import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
	arrow,
	arrowWhite,
	buildingIcon,
	buildingImage1,
	communityIcon,
	mapIcon,
	purposeIcon,
	quoteMarkIcon,
	statusIcon,
	zoomIcon,
} from "../assets";
import { HeroImageScroll, } from "../components";


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

			<div id="hero" className="h-full flex flex-col gap-36">
				<div className="flex justify-between px-24 pt-24 font-cormorant text-grey">
					<div className="font-medium text-4xl w-1/3 text-terracotta">
						A Community of Care: <br />
						Empowering Divyang,
						<br />
						Elders, and Beyond
					</div>
					<div className="w-2/3 flex gap-20">
						<div className="w-7/12 text-xl font-light">
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
						<div className="w-5/12 text-xl font-light">
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

			<div id="origin" className="h-screen flex justify-center">
				<div className="w-1/3 flex flex-col justify-center items-center ">
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಕಥೆ | <em className="font-medium italic">ORIGIN</em>
					</h6>
					<h4 className="font-cormorant font-normal text-terracotta text-3xl text-center">
						The <em className="italic font-light">Heartfelt Journey</em> <br />{" "}
						Behind This Foundation
					</h4>
					<p className="font-cormorant font-medium text-grey text-xl mt-12 text-center">
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
					<p className="font-cormorant font-medium text-grey text-xl text-center mt-8">
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
				className={`h-screen flex justify-end items-end bg-cover bg-center transition-all duration-1000 ${bgClasses[currentBg]}`}
			>
				<div className="w-1/3 py-14 px-20 bg-offwhite">
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಸಮುದಾಯ | <em className="font-medium italic">COMMUNITY</em>
					</h6>
					<h4 className="font-cormorant font-normal text-grey text-3xl ">
						Aangan <em className="italic font-light">of</em> Togetherness
					</h4>
					<img
						src={communityIcon}
						alt="Icon showing leaves"
						className="mt-4 w-14"
					/>
					<p className="font-cormorant font-light text-grey text-xl mt-4">
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
				<div className="w-1/3 bg-offwhite px-16 py-24 flex flex-col items-center justify-center gap-10">
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಸ್ಥಿತಿ | <em className="font-medium italic">STATUS</em>
					</h6>
					<img
						src={statusIcon}
						alt="Icon showing a Flower with two Leaves on the side."
						className="w-28"
					/>
					<p className="font-cormorant font-light text-grey text-xl text-center">
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
						className=" flex px-7 py-5 bg-beige items-center gap-4"
					>
						<img src={mapIcon} alt="Map Icon" className="w-6" />
						<p className="font-cormorant font-medium italic text-xl">
							View Trust Map
						</p>
						<img src={zoomIcon} alt="Zoom Icon" className="w-6" />
					</a>
				</div>
			</div>

			{/* Status Section ends */}

			{/* Building Section starts */}

			<div
				id="building"
				className="h-screen bg-terracotta bg-building-bg flex w-full justify-between"
			>
				<div className="flex flex-col w-1/2 px-24 pt-24">
					<h6 className="font-cormorant font-light text-offwhite text-xl">
						ನಿರ್ಮಿಸಲು |<em className="font-medium italic">BUILDING</em>
					</h6>
					<h4 className="font-cormorant font-normal text-offwhite text-4xl">
						Weaving Lives, Nurturing
						<br /> a <em className="italic">Collective Dream</em>
					</h4>
					<img
						src={buildingIcon}
						alt="Icon showing a flower with two leaves popping out from the side."
						className="w-24 pt-28"
					/>
					<div className=" scroll font-cormorant font-light text-offwhite text-xl mt-40 mb-24 h-1/2 px-2 overflow-y-scroll overflow-x-visible">
						<p className="dot border-l border-offwhite px-4 pt-2 pb-12">
							To establish and run a centre for the welfare of old and divyanga,
							The word divyanga shall include slow-learners, mentally retarded
							and such other physically disabled people also.
						</p>
						<p className="dot border-l border-offwhite px-4 pt-2 pb-12">
							To establish and run schools, colleges, skill development centers,
							hostels, libraries etc., and also provide scholarship to poor
							students for their studies.
						</p>
						<p className="dot border-l border-offwhite px-4 pt-2 pb-12">
							To provide both medical and financial relief to the poor and
							needy.
						</p>
						<p className="dot border-l border-offwhite px-4 pt-2 pb-12">
							To undertake rural development work like developing rural schools,
							roads, environment, organizing medical camps etc.
						</p>
						<p className="dot border-l border-offwhite px-4 pt-2 pb-12">
							To undertake preservation of environment, including water-shed,
							forests and wildlife and preservation of monuments, places or
							objects of artistic or historic interest.
						</p>
						<p className="dot border-l border-offwhite px-4 py-2">
							To administer the properties of the Trust in achieving the objects
							mentioned in this Deed.
						</p>
					</div>
				</div>
				<img
					src={buildingImage1}
					alt="Image of volunteers with various old people who are sitting."
					className=""
				/>
			</div>

			{/* Building Section ends */}

			{/* Purpose Section starts */}

			<div
				id="purpose"
				className="h-screen bg-purpose-bg bg-no-repeat bg-bottom bg-cover flex justify-center"
			>
				<div className="w-1/2 flex flex-col items-center mt-36 gap-8">
					<img
						src={purposeIcon}
						alt="Icon showing two sets of leaves"
						className="w-28"
					/>
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಉದ್ದೇಶ | <em className="font-medium italic">PURPOSE</em>
					</h6>
					<h4 className="font-cormorant font-medium text-grey text-3xl">
						How do we see <em className="italic">ourselves</em>
					</h4>
					<div className="flex gap-8 font-cormorant font-normal text-grey text-xl text-justify">
						<p>
							We embark on a mission, to light the path for every Divyang soul
							with the transformative power of education. In this gurukul of
							inclusivity, we empower every individual, regardless of their
							challenges, through compassion, acceptance, and guidance. Every
							mind here is unique, and every dream is possible with the strength
							of community and a commitment to learning.
						</p>
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
				className="h-screen bg-currently-bg  bg-no-repeat bg-center bg-cover flex items-center justify-center"
			>
				<div className="flex flex-col gap-8">
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಇದೀಗ | <em className="font-medium italic">CURRENTLY</em>
					</h6>
					<h4 className="font-cormorant font-normal text-grey text-3xl">
						Where we are{" "}
						<em className=" font-light italic">
							<br />
							right now
						</em>
					</h4>
					<p className="font-cormorant font-normal text-grey text-xl">
						The Trust is having exemptions <br />
						for donations under:
					</p>
					<div className="flex flex-col font-cormorant text-xl italic">
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
						className="flex py-4 px-8 bg-terracotta rounded-lg w-fit items-center gap-4"
					>
						<p className="font-cormorant text-white font-normal text-xl">
							Connect to contribute
						</p>
						<img src={arrowWhite} alt="Arrow Icon" className="w-5" />
					</Link>
				</div>
			</div>

			{/* Currently Section ends */}

			{/* Creators Section starts */}

			<div
				id="creators"
				className="h-screen bg-creators-bg bg-no-repeat bg-bottom bg-cover flex items-end w-full px-24 py-16 justify-between"
			>
				<div className="flex flex-col gap-12 w-2/5">
					<h6 className="font-cormorant font-light text-offwhite text-xl">
						ತಯಾರಕರು | <em className="font-medium italic">CREATORS</em>
					</h6>
					<img
						src={quoteMarkIcon}
						alt="Icon showing double quote mark"
						className="w-44"
					/>
					<h4 className="font-cormorant font-light text-offwhite text-5xl leading-normal">
						We aim to administer the properties of the Trust in achieving the
						objectives and
						<em className="italic">
							make this world more accessible place to live
						</em>
					</h4>
					<div>
						<h5 className="font-cormorant font-medium text-offwhite text-xl">
							- Ishwara and Shankar Bhat
						</h5>
						<p className="font-cormorant font-light text-offwhite text-lg pl-2">
							Founders, Shankar Suhas Trust
						</p>
					</div>
				</div>
				<Link
					to="/trustees"
					className="flex py-4 px-8 bg-offwhite rounded-lg w-fit items-center gap-2"
				>
					<p className="font-cormorant text-terracotta font-normal text-xl">
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
