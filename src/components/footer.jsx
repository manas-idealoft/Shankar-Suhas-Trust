import { Link } from "react-router-dom";
import { logo, arrowRight } from "../assets";

const Footer = () => {
	return (
		<div className="px-8 md:px-24 py-20 md:py-36 gap-20 md:gap-0 flex flex-col md:flex-row justify-between bg-beige">
			<div className="flex flex-col justify-between gap-8">
				<Link to="/" onClick={() => window.scrollTo(0, 0)}>
					<img src={logo} alt="Logo" className="w-12" />
				</Link>
				<h6 className="font-cormorant font-medium italic text-3xl md:text-4xl text-terracotta">
					Shankas Suhas <br />
					Charitable Trust
				</h6>
			</div>
			<div className="flex flex-col gap-6 md:gap-8 items-start md:items-end">
				<p className="text-lg md:text-xl font-cormorant font-normal text-grey">
					Contact us or visit us directly:
				</p>
				<Link to="/contribute" onClick={() => window.scrollTo(0, 0)}>
					<div className="flex items-center gap-2 font-cormorant font-medium text-lg md:text-2xl text-brown">
						<p>Contact</p>
						<img src={arrowRight} alt="arrow" className="w-4" />
					</div>
				</Link>
				<p className="text-lg md:text-2xl font-cormorant font-normal text-grey text-left md:text-right">
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
