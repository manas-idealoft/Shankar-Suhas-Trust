import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
	arrowRight,
	arrowWhite,
	crossIcon,
	hamburgerIcon,
	logo,
} from "../assets";
import TrusteePopUp from "./trusteePopUp"; // Import popup

const Navbar = () => {
	const [toggle, setToggle] = useState(false); // Mobile menu state
	const [showPopup, setShowPopup] = useState(false); // Trustee popup state
		const [showNavbar, setShowNavbar] = useState(true);
		const [lastScrollY, setLastScrollY] = useState(0);

		// Detect scroll direction
		useEffect(() => {
			const handleScroll = () => {
				if (window.scrollY > lastScrollY && window.scrollY > 100) {
					setShowNavbar(false); // Scrolling down
				} else {
					setShowNavbar(true); // Scrolling up
				}
				setLastScrollY(window.scrollY);
			};

			window.addEventListener("scroll", handleScroll);

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}, [lastScrollY]);
	
	const location = useLocation(); // Current path

	return (
		<>
			<nav
				className={`px-8 md:px-24 pt-8 xl:pt-12 pb-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-offwhite ${
					showNavbar ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				{/* Logo */}
				<div>
					<Link to="/">
						<img src={logo} alt="Logo" className="w-14 lg:w-16 xl:w-20" />
					</Link>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center font-cormorant font-normal text-terracotta lg:text-lg xl:text-xl gap-8">
					{/* Home */}
					<li className="flex flex-col items-center">
						<Link to="/">
							<p
								className={
									location.pathname === "/" ? "font-bold text-brown" : ""
								}
							>
								Home
							</p>
						</Link>
						{location.pathname === "/" && (
							<div className="w-1 h-1 bg-brown rounded-full mt-1" />
						)}
					</li>

					{/* Purpose */}
					<li className="flex flex-col items-center">
						<Link to="/purpose">
							<p
								className={
									location.pathname === "/purpose" ? "font-bold text-brown" : ""
								}
							>
								Our Purpose
							</p>
						</Link>
						{location.pathname === "/purpose" && (
							<div className="w-1 h-1 bg-brown rounded-full mt-1" />
						)}
					</li>

					{/* Trustees */}
					<li className="flex flex-col items-center">
						<button
							onClick={() => setShowPopup(true)}
							className={showPopup ? "font-bold text-brown" : ""}
						>
							Trustees
						</button>
						{showPopup && (
							<div className="w-1 h-1 bg-brown rounded-full mt-1" />
						)}
					</li>

					{/* Contribute */}
					<li>
						<Link to="/contribute">
							<div
								className={`flex items-center gap-2 py-3 px-8 rounded-lg ${
									location.pathname === "/contribute"
										? "bg-terracotta text-white font-bold"
										: "bg-white text-brown"
								}`}
							>
								<p>Contribute</p>
								<img
									src={
										location.pathname === "/contribute"
											? arrowWhite
											: arrowRight
									}
									alt="arrow"
									className="w-4"
								/>
							</div>
						</Link>
					</li>
				</ul>

				{/* Mobile Menu Button */}
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

			{/* Mobile Dropdown Menu */}
			{toggle && (
				<div
					className="absolute top-28 right-8 bg-white shadow-lg rounded-lg px-6 py-4 flex flex-col justify-start gap-4 transition-all duration-300"
					style={{ zIndex: 40 }}
				>
					{/* Home */}
					<Link to="/" onClick={() => setToggle(false)}>
						<div className="flex flex-col items-start gap-1">
							<div className="flex items-center gap-2">
								<p
									className={`text-terracotta font-cormorant font-medium text-lg ${
										location.pathname === "/" ? "" : "font-bold text-brown"
									}`}
								>
									Home
								</p>
							</div>
						</div>
					</Link>

					{/* Purpose */}
					<Link to="/purpose" onClick={() => setToggle(false)}>
						<div className="flex flex-col items-start gap-1">
							<div className="flex items-center gap-2">
								<p
									className={`text-terracotta font-cormorant font-medium text-lg ${
										location.pathname === "/purpose"
											? ""
											: "font-bold text-brown"
									}`}
								>
									Our Purpose
								</p>
							</div>
						</div>
					</Link>

					{/* Trustees */}
					<button
						onClick={() => {
							setShowPopup(true);
							setToggle(false);
						}}
					>
						<div className="flex flex-col items-start gap-1">
							<div className="flex items-center gap-2">
								<p
									className={`text-terracotta font-cormorant font-medium text-lg ${
										showPopup ? "" : "font-bold text-brown"
									}`}
								>
									Trustees
								</p>
							</div>
						</div>
					</button>

					{/* Contribute */}
					<Link to="/contribute" onClick={() => setToggle(false)}>
						<div className="flex flex-col items-start gap-1">
							<div className="flex items-center gap-2">
								<p
									className={`text-terracotta font-cormorant font-medium text-lg ${
										location.pathname === "/contribute"
											? ""
											: "font-bold text-brown"
									}`}
								>
									Contribute
								</p>
							</div>
						</div>
					</Link>
				</div>
			)}

			{/* Popup */}
			{showPopup && (
				<TrusteePopUp isOpen={showPopup} onClose={() => setShowPopup(false)} />
			)}
		</>
	);
};

export default Navbar;
