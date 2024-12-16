import { arrow, arrowDown, chevronDown, chevronUp } from "../assets";
import { ImageSlideshow } from "../components";
import { useState } from "react";

const Contribute = () => {
    const [formData, setFormData] = useState({
			name: "",
			reason: "",
			email: "",
			phoneNumber: "",
			location: "",
    });
    

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
			<div id="origin" className="h-screen">
				<h6 className="font-cormorant font-light text-terracotta text-xl">
					ಕಥೆ | <em className="font-bold italic">ORIGIN</em>
				</h6>
				<h4 className="font-cormorant font-normal text-terracotta text-3xl">
					The Heartfelt Journey Behind This Foundation
				</h4>
				<ImageSlideshow />
			</div>
			<div id="contribute" className="h-screen">
				<div className="flex">
					<h6 className="font-cormorant font-light text-terracotta text-xl">
						ಸಮುದಾಯ | <em className="font-bold italic">CONTRIBUTE</em>
					</h6>
					<img src={arrowDown} alt="" />
				</div>
				<div className="bg-form-bg flex">
					<div>
						<h4 className="font-cormorant font-normal text-terracotta text-3xl">
							Get involved with the <br />
							foundation to{" "}
							<em className="italic">
								make a <br />
								difference!
							</em>
						</h4>
						<div>
							<h6 className="font-cormorant font-light text-terracotta text-xl">
								ಸಮುದಾಯ |<em className="font-bold italic">DIRECT CONTACT</em>
							</h6>
							<div>
								<p>
									4, Parthasarathynagara, Dasankoppal Gate, Bogadi, Mysuru-570
									026
								</p>
								<div>
									<a href="mailto:contact@sst.org">contact@sst.org</a>
									<a href="tel:+910000000000">+91 000 000 0000</a>
								</div>
							</div>
						</div>
					</div>
					<form onSubmit={handleSubmit} className="font-cormorant ">
						<div className="">
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
							<label className="">Why you want to get involved with us?</label>
							<input
								type="text"
								name="reason"
								placeholder="Your answer :))"
								value={formData.reason}
								onChange={handleChange}
								className="w-full bg-transparent border-b border-grey outline-none py-2 text-grey"
							/>
						</div>

						<div className=" flex">
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

						<div className="flex">
							<div className="">
								<label className="">Location</label>
								<input
									type="text"
									name="location"
									placeholder="Your country and city"
									value={formData.location}
									onChange={handleChange}
									className="w-full bg-transparent border-b border-grey outline-none py-2 text-grey"
								/>
							</div>

							<div className="flex justify-end">
								<button
									type="submit"
									className="flex items-center gap-2 bg-white px-6 py-3 border rounded-md shadow-md hover:shadow-lg transition"
								>
									<p>Submit</p>
									<img src={arrow} alt="" />
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div id="questions" className="h-screen">
				<div className="flex">
					<div className="flex flex-col">
						<div className="flex flex-col">
							{faqData.map((item, index) => (
								<div key={index} className="flex flex-col mb-4">
									<div
										onClick={() => handleToggle(index)}
										className="flex justify-between cursor-pointer"
									>
										<p>{item.question}</p>
										<img
											src={toggleIndex === index ? chevronUp : chevronDown}
											alt=""
										/>
									</div>
									<div
										className={`${toggleIndex === index ? "block" : "hidden"}`}
									>
										<p>{item.answer}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<h6 className="font-cormorant font-light text-terracotta text-xl">
							ಪ್ರಶ್ನೆಗಳು | <em className="font-bold italic">QUESTIONS</em>
						</h6>
						<h4 className="font-cormorant font-normal text-grey text-3xl">
							Till then, we might be able to answer a few questions for you!
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contribute;
