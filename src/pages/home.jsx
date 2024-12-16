import { Link } from "react-router-dom";
import {
    arrow,
	buildingIcon,
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
	return (
		<div>
			<div id="hero" className="h-screen flex flex-col gap-36">
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
						<div className="w-5/12 text-xl  font-light">
							If you share the vision of a compassionate and inclusive society,
							please consider supporting the{" "}
							<em className="italic font-semibold">Shankar Suhas Trust</em> by
							donating your time or resources.
						</div>
					</div>
				</div>
				<HeroImageScroll />
			</div>
			<div id="origin" className="h-screen">
				<div>
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಕಥೆ | <em className="font-bold italic">ORIGIN</em>
					</h6>
					<h4 className="font-cormorant font-normal text-terracotta text-3xl">
						The <em className="italic">Heartfelt Journey</em> <br /> Behind This
						Foundation
					</h4>
					<p className="font-cormorant font-medium text-grey text-xl">
						The founders of the Shankar Suhas Trust, K. Ishwara Bhat, a retired
						Principal from the Directorate of Education, Government of N.C.T. of
						Delhi, and Mrs. Ganga Bhat, a retired officer from a nationalized
						bank, established this Trust out of deep compassion and a spirit of
						seva. Being parents to two autistic sons, they witnessed firsthand
						the struggles faced by Divyang individuals and the downtrodden,
						often compounded by society&apos;s apathy. Moved by these
						experiences and driven by a desire to serve, they registered the
						Trust in 2018 in Mysuru, Karnataka, under the Indian Registration
						Act. The Trust, named after their sons, Shankar and Suhas, stands as
						a beacon of hope, striving to foster inclusion, dignity, and care
						for the differently-abled and the underprivileged.
					</p>
				</div>
			</div>
			<div id="community" className="h-screen">
				<div>
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಸಮುದಾಯ | <em className="font-bold italic">COMMUNITY</em>
					</h6>
					<h4 className="font-cormorant font-normal text-terracotta text-3xl">
						Aangan <em className="italic">of</em> <br /> Togetherness
					</h4>
					<img src={communityIcon} alt="Icon showing leaves" />
					<p className="font-cormorant font-medium text-grey text-xl">
						In the warmth of our aangan—a cherished Indian courtyard
						tradition—lies a close-knit community that thrives on care,
						togetherness, and shared purpose. It&apos;s a sanctuary where lives
						blossom, values are nurtured, and the spirit of seva binds everyone
						in a tapestry of love and harmony.
					</p>
				</div>
			</div>
			<div id="status" className="h-screen bg-status-bg">
				<div>
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಸ್ಥಿತಿ | <em className="font-bold italic">STATUS</em>
					</h6>
					<img
						src={statusIcon}
						alt="Icon showing a Flower with two Leaves on the side."
					/>
					<p className="font-cormorant font-medium text-grey text-xl">
						To support its activities, the Trust has acquired
						<em>4 acres and 4 guntas of commercial land</em> on the Main
						District Road connecting Doddakanya and Doddakatur in Sindhuvalli
						Panchayath, Jayapura Hobli, Mysuru Taluk. The land is 8 km from
						Mysuru Airport and 5 km from Kadakola &#40;Mysuru-Ooty National
						Highway&#41;.
					</p>
					<a>
						<img src={mapIcon} alt="Map Icon" />
						<p>View Trust Map</p>
						<img src={zoomIcon} alt="Zoom Icon" />
					</a>
				</div>
			</div>
			<div id="building" className="h-screen bg-terracotta bg-building-bg flex">
				<div>
					<h6 className="font-cormorant font-light text-offwhite text-xl">
						ನಿರ್ಮಿಸಲು |<em className="font-bold italic">BUILDING</em>
					</h6>
					<h4 className="font-cormorant font-normal text-offwhite text-3xl">
						Weaving Lives, Nurturing a<br />
						<em className="italic">Collective Dream</em>
					</h4>
					<img
						src={buildingIcon}
						alt="Icon showing a flower with two leaves popping out from the side."
					/>
					<div className="font-cormorant font-light text-offwhite text-xl">
						<p>
							To establish and run a centre for the welfare of old and divyanga,
							The word divyanga shall include slow-learners, mentally retarded
							and such other physically disabled people also.
						</p>
						<p>
							To establish and run schools, colleges, skill development centers,
							hostels, libraries etc., and also provide scholarship to poor
							students for their studies.
						</p>
						<p>
							To provide both medical and financial relief to the poor and
							needy.
						</p>
						<p>
							To undertake rural development work like developing rural schools,
							roads, environment, organizing medical camps etc.
						</p>
						<p>
							To undertake preservation of environment, including water-shed,
							forests and wildlife and preservation of monuments, places or
							objects of artistic or historic interest.
						</p>
						<p>
							To administer the properties of the Trust in achieving the objects
							mentioned in this Deed.
						</p>
					</div>
				</div>
				<img src={buildingImage1} alt="" />
			</div>
			<div
				id="purpose"
				className="h-screen bg-purpose-bg bg-no-repeat bg-bottom"
			>
				<div>
					<img src={purposeIcon} alt="Icon showing two sets of leaves" />
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಉದ್ದೇಶ | <em className="font-bold italic">PURPOSE</em>
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
			<div id="currently" className="h-screen bg-currently-bg">
				<div>
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಇದೀಗ | <em className="font-bold italic">CURRENTLY</em>
					</h6>
					<h4 className="font-cormorant font-normal text-grey text-3xl">
						Where we are <em className="italic">right now</em>
					</h4>
					<p className="font-cormorant font-medium text-grey text-xl">
						The Trust is having exemptions <br />
						for donations under:
					</p>
					<div>
						<div className="">
							<div className="">Income Tax Act:</div>
							<div className="">80G</div>
						</div>
						<div className="">
							<div className="">Registered Under:</div>
							<div className="">
								“Darpan” Ministry of Planning, Government of India
							</div>
						</div>
						<div className="">
							<div className="">Unique ID:</div>
							<div className="">KA/2024/0427228dated 25-6-2024</div>
						</div>
						<div className="">
							<div className="">Trust&apos;s C.S.R Registr. Number</div>
							<div className="">CSR00076779</div>
						</div>
						<div className="">
							<div className="">C.S.R Number Registr. At</div>
							<div className="">
								Office of the Registrar of the Companies, Ministry of Corporate
								Affairs, Government of India.
							</div>
						</div>
					</div>
					<Link to="/contribute">
						<p>Connect to contribute</p>
						<img src={arrow} alt="Arrow Icon" />
					</Link>
				</div>
			</div>
			<div id="creators" className="h-screen bg-creators-bg bg-no-repeat">
				<div>
					<h6 className="font-cormorant font-light text-offwhite text-xl">
						ತಯಾರಕರು | <em className="font-bold italic">CREATORS</em>
					</h6>
					<img src={quoteMarkIcon} alt="Icon showing double quote mark" />
					<h4 className="font-cormorant font-normal text-offwhite text-3xl">
						We aim to administer the properties of the Trust in achieving the
						objectives and{" "}
						<em className="italic">
							make this world more accessible place to live
						</em>
					</h4>
					<h5 className="font-cormorant font-medium text-grey text-xl">
						- Ishwara and Shankar Bhat
					</h5>
					<p>Founders, Shankar Suhas Trust</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
