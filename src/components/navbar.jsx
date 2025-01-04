import { Link } from "react-router-dom";
import { useState } from "react";
import { arrow, arrowWhite, crossIcon, hamburgerIcon, logo } from "../assets";

const Navbar = () => {
const [toggle, setToggle] = useState(false)

	return (
		<nav className="px-8 md:px-24 pt-12 pb-4 flex items-center justify-between absolute w-full">
			<div>
				<Link to="/">
					<img src={logo} alt="Logo" className="w-12" />
				</Link>
			</div>
			<ul className="hidden md:flex items-center font-cormorant font-medium text-terracotta text-lg gap-8">
				<li>
					<Link to="/trustees">Trustees</Link>
				</li>

				<li>
					<Link to="/contribute">
						<div className="flex items-center gap-2 py-3 px-8 bg-white rounded-lg">
							<p>Contribute</p>
							<img src={arrow} alt="arrow" className="w-4" />
						</div>
					</Link>
				</li>
			</ul>
			<div className="relative flex flex-col md:hidden items-end w-full">
				<img
					src={toggle ? crossIcon : hamburgerIcon}
					alt=""
					className="w-5 cursor-pointer z-20"
					onClick={() => setToggle(!toggle)}
				/>
				<div
					className={`absolute w-auto z-10 p-4 bg-white font-cormorant font-medium text-base mt-8 rounded-lg border border-terracotta flex flex-col gap-4 ${
						toggle
							? "block"
							: "hidden"
					}`}
				>
					<Link to="/trustees" onClick={() => setToggle(!toggle)}>
						Trustees
					</Link>
					<Link
						to="/contribute"
						onClick={() => setToggle(!toggle)}
						className="block"
					>
						<div className="flex items-center gap-2 py-2 px-4 bg-terracotta rounded-lg text-white">
							<p>Contribute</p>
							<img
								src={arrowWhite}
								alt="arrow"
								className="w-4 h-auto object-contain"
							/>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
