import { trusteesIcon } from "../assets";
import { TrusteeScroll } from "../components";

const Trustees = () => {
	return (
		<div className="h-svh flex flex-col py-24 mx-24 justify-between">
			<h6 className="font-cormorant font-light text-terracotta text-xl pt-24">
				ಟ್ರಸ್ಟಿಗಳು | <em className="font-medium italic">TRUSTEES</em>
			</h6>

			<img src={trusteesIcon} alt="Icon showing leaves" className="w-16" />
			<TrusteeScroll />
		</div>
	);
};

export default Trustees;
