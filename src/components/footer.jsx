import { Link } from "react-router-dom";
import { logo, arrow } from "../assets";

const Footer = () => {
	return (
		<div className="px-24 py-36 flex justify-between bg-beige">
			<div className="flex flex-col justify-between">
				<Link to="/">
					<img src={logo} alt="Logo" className="w-12" />
				</Link>
				<h6 className="font-cormorant font-medium italic text-4xl text-terracotta">
					Shankas Suhas <br />
					Charitable Trust
				</h6>
			</div>
			<div className="flex flex-col gap-8 items-end">
				<p className="text-xl font-cormorant font-normal text-grey">
					Contact us or visit us directly:
				</p>
				<Link to="/contribute">
					<div className="flex items-center gap-2 font-cormorant font-medium text-2xl text-terracotta">
						<p>Contact</p>
						<img src={arrow} alt="arrow" className="w-4" />
					</div>
				</Link>
				<p className="text-2xl font-cormorant font-normal text-grey text-right">
					4, Parthasarathynagara,
					<br />
					Dasankoppal Gate, Bogadi,
					<br />
					Mysuru-570 026
				</p>
			</div>
		</div>
	);
};

export default Footer;
