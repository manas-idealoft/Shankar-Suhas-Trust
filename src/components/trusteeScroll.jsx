import { trusteePlaceholder } from "../assets";
import React from "react";

const TrusteeScroll = () => {
	const trustees = Array(9).fill({
		img: trusteePlaceholder,
		name: "Name Last Name",
		description: "A couple of lines about the trustee",
	});

	React.useEffect(() => {
		const scrollers = document.querySelectorAll(".scroller");

		const addAnimation = () => {
			scrollers.forEach((scroller) => {
				// Prevent multiple duplications
				if (scroller.getAttribute("data-animated")) return;

				scroller.setAttribute("data-animated", true);

				const scrollerInner = scroller.querySelector(".scroller_inner");
				const scrollerContent = Array.from(scrollerInner.children);

				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					duplicatedItem.setAttribute("aria-hidden", true);
					scrollerInner.appendChild(duplicatedItem);
				});
			});
		};

		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}
	}, []); // Use React's useEffect to run once after component mount

	return (
		<div className="scroller w-full">
			<div className="scroller_inner h-full">
				{/* Original content */}
				{trustees.map((trustee, index) => (
					<div key={index} className="flex flex-col">
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
			</div>
		</div>
	);
};

export default TrusteeScroll;
