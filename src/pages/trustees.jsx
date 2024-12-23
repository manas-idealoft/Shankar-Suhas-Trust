import { trusteesIcon } from "../assets";
import { TrusteeScroll } from "../components";

const Trustees = () => {
	return (
		<div className="h-fit flex flex-col my-16 mx-24 gap-8">
			<h6 className="font-cormorant font-light text-terracotta text-xl">
				ಟ್ರಸ್ಟಿಗಳು | <em className="font-medium italic">TRUSTEES</em>
			</h6>

            <img src={trusteesIcon} alt="Icon showing leaves" className="w-16"/>
            <TrusteeScroll/>
		</div>
	);
};

export default Trustees;
