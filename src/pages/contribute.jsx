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
	const [submitStatus, setSubmitStatus] = useState(null);
	const [toggleIndex, setToggleIndex] = useState(null);

	const validate = () => {
		let newErrors = {};
		if (!formData.name.trim()) newErrors.name = "Name is required.";
		if (!formData.reason.trim()) newErrors.reason = "Tell us why.";

		if (!formData.email.trim()) {
			newErrors.email = "Enter your email.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Invalid email format.";
		}

		if (!formData.phoneNumber.trim()) {
			newErrors.phoneNumber = "Enter your phone number.";
		} else if (!/^\d{4} \d{3} \d{3}$/.test(formData.phoneNumber)) {
			newErrors.phoneNumber = "Format must be: 1234 567 890";
		}

		if (!formData.location.trim()) newErrors.location = "Enter your location.";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name === "phoneNumber") {
			let cleaned = value.replace(/\D/g, "");
			if (cleaned.length > 4 && cleaned.length <= 7) {
				cleaned = cleaned.replace(/^(\d{4})(\d{0,3})/, "$1 $2");
			} else if (cleaned.length > 7) {
				cleaned = cleaned.replace(/^(\d{4})(\d{3})(\d{0,3})/, "$1 $2 $3");
			}
			setFormData((prev) => ({ ...prev, phoneNumber: cleaned }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		let error = "";

		switch (name) {
			case "name":
				if (!value.trim()) error = "Name is required.";
				break;
			case "reason":
				if (!value.trim()) error = "Tell us why.";
				break;
			case "email":
				if (!value.trim()) error = "Enter your email.";
				else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
					error = "Invalid email format.";
				break;
			case "phoneNumber":
				if (!value.trim()) error = "Enter your phone number.";
				else if (!/^\d{4} \d{3} \d{3}$/.test(value))
					error = "Format must be: 1234 567 890";
				break;
			case "location":
				if (!value.trim()) error = "Enter your location.";
				break;
			default:
				break;
		}

		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;

		const submissionData = { ...formData };
		setSubmitStatus("submitting");

		try {
			await fetch(
				"https://script.google.com/macros/s/AKfycbyrtHSp7NZuae6VHG1Z3hpnDSrPUcZcwCIAzRBXPIJ2ds14xRxZpak7kdmQevh7FQlePA/exec",
				{
					method: "POST",
					body: JSON.stringify(submissionData),
					headers: { "Content-Type": "application/json" },
					mode: "no-cors",
				}
			);
			setFormData({
				name: "",
				reason: "",
				email: "",
				phoneNumber: "",
				location: "",
			});
			setErrors({});
			setSubmitStatus("submitted");
			setTimeout(() => setSubmitStatus(null), 3000);
		} catch (error) {
			console.error("Submission error:", error);
			alert("Error submitting. Please try again.");
			setSubmitStatus("error");
			setTimeout(() => setSubmitStatus(null), 5000);
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
					(ii) Create an inclusive educational institution integrating persons
					with disabilities and the underprivileged.
				</>
			),
		},
		{
			question: "Who can benefit from the services provided by the Trust?",
			answer: (
				<>
					The Trust’s services benefit:
					<br />
					(i) Persons with disabilities (divyang)
					<br />
					(ii) Underprivileged individuals
					<br />
					(iii) Elderly individuals
					<br />
					(iv) The general public
				</>
			),
		},
		{
			question: "How can I donate to the Trust?",
			answer: (
				<>
					You can support us by volunteering, donating goods, or making monetary
					contributions.
					<br />
					Registered NGOs can collaborate with us through MOUs.
				</>
			),
		},
	];

	const handleToggle = (index) =>
		setToggleIndex(toggleIndex === index ? null : index);

	return (
		<div className="pt-24">
			{/* Header */}
			<div
				id="contribute"
				className="h-full py-16 xl:pt-36 xl:pb-24 px-8 md:px-24"
			>
				<div className="flex gap-5">
					<h6 className="font-cormorant font-light text-terracotta text-lg xl:text-xl">
						ಸಮುದಾಯ | <em className="font-medium italic">CONTRIBUTE</em>
					</h6>
					<img src={arrowDown} alt="Arrow" className="w-8 md:w-12 pt-4" />
				</div>

				{/* Form + Left Info */}
				<div className="bg-form-bg flex flex-col xl:flex-row mt-4 lg:mt-8 p-4 pb-12 md:p-12 xl:pb-20 xl:p-20 gap-8 xl:gap-12 items-center md:items-start">
					{/* Left column */}
					<div className="w-full xl:w-1/3">
						<h4 className="font-cormorant text-brown text-2xl lg:text-3xl xl:text-4xl">
							Get involved with the <br />
							foundation to <em className="italic">make a difference!</em>
						</h4>
						<div className="hidden xl:flex pt-8 md:pt-28 flex-col items-start">
							<h6 className="font-cormorant text-terracotta text-lg md:text-xl">
								ಸಮುದಾಯ | <em className="font-medium italic">DIRECT CONTACT</em>
							</h6>
							<div className="font-cormorant text-lg md:text-xl pt-4">
								<p>
									4, Parthasarathynagara, Dasankoppal Gate, Bogadi, Mysuru-570
									026
								</p>
								<div className="pt-4 md:pt-12">
									<a href="mailto:contact@sst.org">contact@sst.org</a>
									<br />
									<a href="tel:+910000000000">+91 000 000 0000</a>
								</div>
							</div>
						</div>
					</div>

					{/* Form */}
					<form
						onSubmit={handleSubmit}
						className="font-cormorant text-lg xl:text-2xl w-full xl:w-2/3 flex flex-col gap-8 xl:gap-12"
					>
						{/* Name */}
						<div>
							<label
								className={` ${
									errors.name ? "text-brown font-semibold" : "text-grey"
								}`}
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								placeholder="First and last name"
								value={formData.name}
								onChange={handleChange}
								onBlur={handleBlur}
								className={`w-full bg-transparent ${
									errors.name
										? "border-b-2 border-brown"
										: "border-b border-grey"
								} outline-none xl:py-2 text-brown text-xl md:text-2xl xl:text-3xl`}
							/>
							{errors.name && <p className="text-brown">{errors.name}</p>}
						</div>

						{/* Reason */}
						<div>
							<label
								className={` ${
									errors.reason ? "text-brown font-semibold" : "text-grey"
								}`}
							>
								Why do you want to get involved with us?
							</label>
							<input
								type="text"
								name="reason"
								placeholder="Your answer :))"
								value={formData.reason}
								onChange={handleChange}
								onBlur={handleBlur}
								className={`w-full bg-transparent ${
									errors.reason
										? "border-b-2 border-brown"
										: "border-b border-grey"
								} outline-none xl:py-2 text-brown text-xl md:text-2xl xl:text-3xl`}
							/>
							{errors.reason && <p className="text-brown">{errors.reason}</p>}
						</div>

						{/* Email & Phone */}
						<div className="flex flex-col md:flex-row gap-8">
							<div className="w-full md:w-1/2">
								<label
									className={` ${
										errors.email ? "text-brown font-semibold" : "text-grey"
									}`}
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									placeholder="Your email address"
									value={formData.email}
									onChange={handleChange}
									onBlur={handleBlur}
									className={`w-full bg-transparent ${
										errors.email
											? "border-b-2 border-brown"
											: "border-b border-grey"
									} outline-none xl:py-2 text-brown text-xl md:text-2xl xl:text-3xl`}
								/>
								{errors.email && <p className="text-brown">{errors.email}</p>}
							</div>
							<div className="w-full md:w-1/2">
								<label
									className={` ${
										errors.phoneNumber
											? "text-brown font-semibold"
											: "text-grey"
									}`}
								>
									Phone Number
								</label>
								<input
									type="tel"
									name="phoneNumber"
									placeholder="Format: 1234 567 890"
									value={formData.phoneNumber}
									onChange={handleChange}
									onBlur={handleBlur}
									className={`w-full bg-transparent ${
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

						{/* Location & Submit */}
						<div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
							<div className="w-full md:w-1/2">
								<label
									className={` ${
										errors.location ? "text-brown font-semibold" : "text-grey"
									}`}
								>
									Location
								</label>
								<input
									type="text"
									name="location"
									placeholder="Your city and country"
									value={formData.location}
									onChange={handleChange}
									onBlur={handleBlur}
									className={`w-full bg-transparent ${
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
									disabled={submitStatus === "submitting"}
									className={`flex justify-center items-center gap-2 px-8 py-2 border rounded-md transition ${
										submitStatus === "submitted"
											? "bg-brown text-white"
											: submitStatus === "error"
											? "bg-grey text-white"
											: submitStatus === "submitting"
											? "bg-gray-300 text-white cursor-not-allowed"
											: "bg-white hover:bg-gray-200"
									}`}
								>
									<span className="flex items-center gap-2">
										<p className="text-lg md:text-3xl">
											{submitStatus === "submitted"
												? "Submitted"
												: submitStatus === "error"
												? "Error"
												: submitStatus === "submitting"
												? "Submitting..."
												: "Submit"}
										</p>
										{submitStatus === null && (
											<img
												src={arrowBlack}
												alt="Arrow"
												className="w-5 md:w-6"
											/>
										)}
									</span>
								</button>
							</div>
						</div>
					</form>

					{/* Contact (Mobile View) */}
					<div className="flex xl:hidden pt-8 w-full flex-col items-start">
						<h6 className="font-cormorant text-terracotta text-lg md:text-xl">
							ಸಮುದಾಯ | <em className="font-medium italic">DIRECT CONTACT</em>
						</h6>
						<div className="font-cormorant text-lg md:text-xl pt-4">
							<p>
								4, Parthasarathynagara, Dasankoppal Gate, Bogadi, Mysuru-570 026
							</p>
							<div className="pt-4 md:pt-12">
								<a href="mailto:contact@sst.org">contact@sst.org</a>
								<br />
								<a href="tel:+910000000000">+91 000 000 0000</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div
				id="questions"
				className="px-8 md:px-24 pb-24 pt-6 xl:pt-12 flex justify-center"
			>
				<div className="flex flex-col xl:flex-row gap-8 xl:gap-16 w-full">
					<div className="w-full xl:w-2/5">
						<h6 className="font-cormorant text-terracotta text-lg xl:text-xl">
							ಪ್ರಶ್ನೆಗಳು | <em className="font-medium italic">QUESTIONS</em>
						</h6>
						<h4 className="font-cormorant text-grey text-2xl md:text-3xl pt-4">
							Till then, we might be able to answer a few questions for you!
						</h4>
					</div>
					<div className="w-full xl:w-3/5">
						{faqData.map((item, index) => (
							<div
								key={index}
								className="flex flex-col mb-6 pb-6 border-b border-grey"
							>
								<div
									onClick={() => handleToggle(index)}
									className="flex justify-between cursor-pointer text-lg md:text-2xl font-medium font-cormorant"
								>
									<p className="w-4/5">{item.question}</p>
									<img
										src={toggleIndex === index ? chevronUp : chevronDown}
										alt="Toggle"
										className="w-4 md:w-6"
									/>
								</div>
								{toggleIndex === index && (
									<div className="font-cormorant font-light text-lg lg:text-2xl text-grey pt-2 lg:pt-4">
										{item.answer}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contribute;
