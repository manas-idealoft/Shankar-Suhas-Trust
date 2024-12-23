import { trusteePlaceholder } from "../assets";

const TrusteeScroll = () => {
	const trustees = Array(9).fill({
		img: trusteePlaceholder,
		name: "Name Last Name",
		description: "A couple of lines about the trustee",
	});

	return (
		<div className="overflow-hidden w-full h-2/5">
			<div className="hero-scroll flex gap-8 h-full">
				{/* Original content */}
				{trustees.map((trustee, index) => (
					<div key={index} className="flex flex-col gap-8">
						<img src={trustee.img} alt={`Trustee ${index + 1}`} />
						<div className="font-cormorant font-normal text-grey flex flex-col gap-2">
							<h3 className="text-3xl">
								{trustee.name.split(" ")[0]}{" "}
								<em className="italic">{trustee.name.split(" ")[1]}</em>
							</h3>
							<p className="text-xl">{trustee.description}</p>
						</div>
					</div>
				))}
				{/* Duplicate content */}
				{trustees.map((trustee, index) => (
					<div key={`duplicate-${index}`} className="flex flex-col gap-8">
						<img src={trustee.img} alt={`Trustee duplicate ${index + 1}`} />
						<div className="font-cormorant font-normal text-grey flex flex-col gap-2">
							<h3 className="text-3xl">
								{trustee.name.split(" ")[0]}{" "}
								<em className="italic">{trustee.name.split(" ")[1]}</em>
							</h3>
							<p className="text-xl">{trustee.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TrusteeScroll;
