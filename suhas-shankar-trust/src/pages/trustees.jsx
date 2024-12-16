import { trusteesIcon } from "../assets";
import { TrusteeScroll } from "../components";

const Trustees = () => {
	return (
		<div className="h-screen">
			<h6 className="font-cormorant font-light text-terracotta text-xl">
				ಟ್ರಸ್ಟಿಗಳು | <em className="font-bold italic">TRUSTEES</em>
			</h6>

            <img src={trusteesIcon} alt="Icon showing leaves" />
            <TrusteeScroll/>
		</div>
	);
};

export default Trustees;
