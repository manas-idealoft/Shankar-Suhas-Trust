import { arrowBlack, arrowDown, chevronDown, chevronUp } from "../assets";
import { useState } from "react";

const Contribute = () => {
	const [formData, setFormData] = useState({
		name: "",
		reason: "",
		email: "",
		phoneNumber: "",
		location: "",
	});

	const [errors, setErrors] = useState({});

const validate = () => {
	let newErrors = {};
	if (!formData.name.trim()) newErrors.name = "Name is required.";
	if (!formData.reason.trim()) newErrors.reason = "Tell us why.";

	if (!formData.email.trim()) {
		newErrors.email = "Enter your email.";
	} else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
		newErrors.email = "Invalid email.";
	}

	if (!formData.phoneNumber.trim()) {
		newErrors.phoneNumber = "Enter your phone number.";
	} else if (!/^\d{4} \d{3} \d{3}$/.test(formData.phoneNumber)) {
		newErrors.phoneNumber = "Must be 10 digits.";
	}

	if (!formData.location.trim()) newErrors.location = "Enter your location.";
	setErrors(newErrors);
	return Object.keys(newErrors).length === 0;
};


const handleChange = (e) => {
	const { name, value } = e.target;

	if (name === "phoneNumber") {
		// Remove non-numeric characters
		let cleaned = value.replace(/\D/g, "");

		// Format as xxxx xxx xxx
		if (cleaned.length > 4 && cleaned.length <= 7) {
			cleaned = cleaned.replace(/^(\d{4})(\d{0,3})/, "$1 $2");
		} else if (cleaned.length > 7) {
			cleaned = cleaned.replace(/^(\d{4})(\d{3})(\d{0,3})/, "$1 $2 $3");
		}

		setFormData((prevState) => ({ ...prevState, phoneNumber: cleaned }));
	} else {
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	}

	setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Reset error on input change
};

	const [submitStatus, setSubmitStatus] = useState(null);

const handleSubmit = async (e) => {
	e.preventDefault();

	// Run validation
	if (!validate()) {
		return; // Stop submission if validation fails
	}

	const submissionData = {
		name: formData.name,
		email: formData.email,
		phoneNumber: formData.phoneNumber,
		location: formData.location,
		reason: formData.reason,
	};

	console.log("Submitting data:", submissionData); // Debug log

	setSubmitStatus("submitting"); // Set submitting state

	try {
		const response = await fetch(
			"https://script.google.com/macros/s/AKfycbyrtHSp7NZuae6VHG1Z3hpnDSrPUcZcwCIAzRBXPIJ2ds14xRxZpak7kdmQevh7FQlePA/exec",
			{
				method: "POST",
				body: JSON.stringify(submissionData),
				headers: {
					"Content-Type": "application/json",
				},
				mode: "no-cors",
			}
		);

		console.log("Server response:", response);

		alert("Thank you! Your contribution has been recorded.");
		setFormData({
			name: "",
			email: "",
			phoneNumber: "",
			location: "",
			reason: "",
		});
		setErrors({});
		setSubmitStatus("submitted"); // Set submitted state

		// Optionally, clear the status after a delay
		setTimeout(() => {
			setSubmitStatus(null);
		}, 3000); // Clear after 3 seconds
	} catch (error) {
		console.error("Submission error:", error);
		alert("There was an error submitting your contribution. Please try again.");
		setSubmitStatus("error"); // Set error state
		// Optionally, clear the status after a delay
		setTimeout(() => {
			setSubmitStatus(null);
		}, 5000); // Clear after 5 seconds
	}
};

	const faqData = [
		{
			question: "What is the Trust's mission?",
			answer: (
				<>
					The Trust aims to:
					<br />
					(i) Establish a care facility for the elderly and persons with
					disabilities (divyang).
					<br />
					(ii) Create an inclusive educational institution for general
					education, integrating persons with disabilities (divyang) and
					underprivileged individuals.
				</>
			),
		},
		{
			question: "Who can benefit from the services provided by the Trust?",
			answer: (
				<>
					The Trust&apos;s services are designed to benefit:
					<br /> (i) Persons with disabilities (divyang). <br /> (ii)
					Individuals from underprivileged backgrounds. <br />
					(iii) Elderly individuals. <br />
					(iv) The general public, through inclusive education and community
					outreach.
				</>
			),
		},
		{
			question: "How can I donate to the Trust?",
			answer: (
				<>
					The Trust welcomes support in various forms. You can contribute by
					volunteering your time and skills, donating essential goods and
					resources, or making monetary contributions. Additionally, registered
					NGOs sharing our objectives are encouraged to collaborate with us
					through Memorandums of Understanding (MOUs), fostering a collective
					effort to serve our community.
				</>
			),
		},
	];

	const [toggleIndex, setToggleIndex] = useState(null);

	const handleToggle = (index) => {
		setToggleIndex(toggleIndex === index ? null : index);
	};

	return (
		<div className="pt-24">	
			<div id="contribute" className="h-full py-16 xl:pt-36 xl:pb-24 px-8 md:px-24">
				<div className="flex gap-5 ">
					<h6 className="font-cormorant font-light text-terracotta text-lg xl:text-xl">
						ಸಮುದಾಯ | <em className="font-medium italic">CONTRIBUTE</em>
					</h6>
					<img
						src={arrowDown}
						alt="Arrow pointing downward"
						className="w-8 md:w-12 pt-4"
					/>
				</div>
				<div className="bg-form-bg flex flex-col xl:flex-row mt-4 lg:mt-8 p-4 pb-12 md:p-12 md:pb-16 xl:pb-20 xl:p-20 gap-8 xl:gap-12 items-center md:items-start ">
					<div className="w-full xl:w-1/3">
						<h4 className="font-cormorant font-normal text-start text-brown text-2xl lg:text-3xl xl:text-4xl">
							Get involved with the <br />
							foundation to{" "}
							<em className="italic">
								make a <br className="block md:hidden xl:block" />
								difference!
							</em>
						</h4>
						<div className="hidden xl:flex pt-8 md:pt-28 w-full flex-col items-start">
							<h6 className="font-cormorant font-light text-terracotta text-lg md:text-xl">
								ಸಮುದಾಯ |<em className="font-medium italic"> DIRECT CONTACT</em>
							</h6>
							<div className="font-cormorant font-normal text-lg text-start md:text-xl w-full md:w-2/3 pt-4">
								<p>
									4, Parthasarathynagara, Dasankoppal Gate, Bogadi, Mysuru-570
									026
								</p>
								<div className="flex flex-col pt-4 md:pt-12 gap-2 md:gap-4">
									<a href="mailto:contact@sst.org">contact@sst.org</a>
									<a href="tel:+910000000000">+91 000 000 0000</a>
								</div>
							</div>
						</div>
					</div>
					<form
						onSubmit={handleSubmit}
						className="font-cormorant text-lg md:text-lg xl:text-2xl w-full xl:w-2/3 flex flex-col justify-between gap-8 xl:gap-12"
					>
						<div className="w-full">
							<label className="">Name</label>
							<input
								type="text"
								name="name"
								placeholder="First and last name"
								value={formData.name}
								onChange={handleChange}
								className={`w-full bg-transparent  ${
									errors.name
										? "border-b-2 border-brown"
										: "border-b border-grey"
								} outline-none xl:py-2 text-brown text-xl md:text-2xl xl:text-3xl`}
							/>
							{errors.name && <p className="text-brown">{errors.name}</p>}
						</div>

						<div className="w-full">
							<label className="">
								Why do you want to get involved with us?
							</label>
							<input
								type="text"
								name="reason"
								placeholder="Your answer :))"
								value={formData.reason}
								onChange={handleChange}
								className="w-full bg-transparent border-b border-grey outline-none xl:py-2 text-terracotta text-xl md:text-2xl xl:text-3xl"
							/>
						</div>

						<div className=" flex flex-col md:flex-row gap-8">
							<div className="w-full md:w-1/2">
								<label className="">Email</label>
								<input
									type="email"
									name="email"
									placeholder="Your email address"
									value={formData.email}
									onChange={handleChange}
									className={`w-full bg-transparent  ${
										errors.email
											? "border-b-2 border-brown"
											: "border-b border-grey"
									} outline-none xl:py-2 text-brown text-xl md:text-2xl xl:text-3xl`}
								/>
								{errors.email && <p className="text-brown">{errors.email}</p>}
							</div>

							<div className="w-full md:w-1/2">
								<label className="">Phone Number</label>
								<input
									type="tel"
									name="phoneNumber"
									placeholder="Your phone number"
									value={formData.phoneNumber}
									onChange={handleChange}
									className={`w-full bg-transparent  ${
										errors.phoneNumber
											? "border-b-2 border-brown"
											: "border-b border-grey"
									} outline-none xl:py-2 text-brown text-xl md:text-2xl xl:text-3xl`}
								/>
								{errors.phoneNumber && (
									<p className="text-brown">{errors.phoneNumber}</p>
								)}
							</div>
						</div>

						<div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
							<div className="w-full md:w-1/2 flex flex-col">
								<label className="">Location</label>
								<input
									type="text"
									name="location"
									placeholder="Your city and country"
									value={formData.location}
									onChange={handleChange}
									className={`w-full bg-transparent  ${
										errors.location
											? "border-b-2 border-brown"
											: "border-b border-grey"
									} outline-none xl:py-2 text-brown text-xl md:text-2xl xl:text-3xl`}
								/>
								{errors.location && (
									<p className="text-brown">{errors.location}</p>
								)}
							</div>

							<div className="flex w-1/2 h-2/3">
								<button
									type="submit"
									className={`flex justify-center items-center gap-2 px-8 py-2 border rounded-md transition ${
										submitStatus === "submitted"
											? "bg-brown text-white"
											: submitStatus === "error"
											? "bg-grey text-white"
											: "bg-white hover:bg-gray-200"
									}`}
								>
									<span className="flex items-center justify-center gap-2">
										<p className="text-lg md:text-3xl">
											{submitStatus === "submitted"
												? "Submitted"
												: submitStatus === "error"
												? "Error"
												: "Submit"}
										</p>
										{!(
											submitStatus === "submitted" || submitStatus === "error"
										) && (
											<img
												src={arrowBlack}
												alt="Arrow"
												className="w-5 md:w-6 transition"
											/>
										)}
									</span>
								</button>
							</div>
						</div>
					</form>
					<div className="flex xl:hidden pt-8 md:pt-12 w-full flex-col items-start">
						<h6 className="font-cormorant font-light text-terracotta text-lg md:text-xl">
							ಸಮುದಾಯ |<em className="font-medium italic"> DIRECT CONTACT</em>
						</h6>
						<div className="font-cormorant font-normal text-lg text-start md:text-xl w-full md:w-2/3 lg:w-1/2 pt-4">
							<p>
								4, Parthasarathynagara, Dasankoppal Gate, Bogadi, Mysuru-570 026
							</p>
							<div className="flex flex-col md:flex-row pt-4 xl:pt-12 gap-2 md:gap-4">
								<a href="mailto:contact@sst.org">contact@sst.org</a>
								<a href="tel:+910000000000">+91 000 000 0000</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				id="questions"
				className="h-full xl:h-fit px-8 md:px-24 pb-24 pt-6 xl:pt-12 flex justify-center items-center"
			>
				<div className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-16 px-0 xl:px-8 w-full">
					<div className="flex flex-col w-full xl:w-3/5">
						<div className="flex flex-col w-full">
							{faqData.map((item, index) => (
								<div
									key={index}
									className="flex flex-col mb-4 md:mb-6 pb-4 md:pb-6 border-b border-grey w-full"
								>
									<div
										onClick={() => handleToggle(index)}
										className="flex justify-between cursor-pointer text-lg md:text-2xl font-medium font-cormorant"
									>
										<p className="w-4/5">{item.question}</p>
										<img
											src={toggleIndex === index ? chevronUp : chevronDown}
											alt="Chevron Down"
											className="w-4 md:w-6"
										/>
									</div>
									<div
										className={`${
											toggleIndex === index ? "block" : " hidden"
										} font-cormorant font-light text-lg lg:text-2xl text-grey pt-2 lg:pt-4`}
									>
										<p>{item.answer}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-full xl:w-2/5">
						<h6 className="font-cormorant font-light text-terracotta text-lg xl:text-xl">
							ಪ್ರಶ್ನೆಗಳು | <em className="font-medium italic">QUESTIONS</em>
						</h6>
						<h4 className="font-cormorant font-normal text-grey text-2xl md:text-3xl pt-4">
							Till then, we might be able to answer a few questions for you!
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contribute;
