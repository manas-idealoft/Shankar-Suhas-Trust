import { Link } from "react-router-dom";
import { useState } from "react";
import { arrowRight, crossIcon, hamburgerIcon, logo } from "../assets";
import TrusteePopUp from "./trusteePopUp"; // Import popup

const Navbar = () => {
	const [toggle, setToggle] = useState(false); // Mobile menu state
	const [showPopup, setShowPopup] = useState(false); // Trustee popup state

	return (
		<>
			<nav className="px-8 md:px-24 pt-12 pb-4 flex items-center justify-between absolute w-full z-50">
				{/* Logo */}
				<div>
					<Link to="/">
						<img src={logo} alt="Logo" className="w-20" />
					</Link>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center font-cormorant font-medium text-terracotta text-lg gap-8">
					<li>
						<button
							onClick={() => setShowPopup(true)}
							className="hover:underline"
						>
							Trustees
						</button>
					</li>
					<li>
						<Link to="/contribute">
							<div className="flex items-center gap-2 py-3 px-8 bg-white rounded-lg">
								<p>Contribute</p>
								<img src={arrowRight} alt="arrow" className="w-4" />
							</div>
						</Link>
					</li>
				</ul>

				{/* Mobile Menu Button (Hamburger / Cross) */}
				<div className="md:hidden z-50 relative">
					<button onClick={() => setToggle(!toggle)}>
						<img
							src={toggle ? crossIcon : hamburgerIcon}
							alt="menu"
							className={`${toggle ? "w-4" : "w-6"}`}
						/>
					</button>
				</div>
			</nav>

			{/* Mobile Dropdown Menu (Positioned Below the Cross) */}
			{toggle && (
				<div
					className="absolute top-28 right-8 bg-white shadow-lg rounded-lg px-6 py-4 flex flex-col justify-start gap-4 transition-all duration-300"
					style={{ zIndex: 40 }}
				>
					<button
						onClick={() => {
							setShowPopup(true);
							setToggle(false); // Close menu when opening popup
						}}
					>
						<div className="flex items-center gap-2">
							<p className="text-terracotta font-cormorant font-medium text-lg">
								Trustees
							</p>
							<img src={arrowRight} alt="arrow" className="w-4" />
						</div>
					</button>
					<Link to="/contribute" onClick={() => setToggle(false)}>
						<div className="flex items-center gap-2">
							<p className="text-terracotta font-cormorant font-medium text-lg">
								Contribute
							</p>
							<img src={arrowRight} alt="arrow" className="w-4" />
						</div>
					</Link>
				</div>
			)}

			{/* Render the popup if showPopup is true */}
			{showPopup && (
				<TrusteePopUp isOpen={showPopup} onClose={() => setShowPopup(false)} />
			)}
		</>
	);
};

export default Navbar;
