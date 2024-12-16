import { Link } from "react-router-dom";
import { arrow, logo } from "../assets";

const Navbar = () => {
	return (
		<nav className=" px-24 py-12 flex items-center justify-between">
			<div>
				<Link to="/">
					<img src={logo} alt="Logo" className="w-12" />
				</Link>
			</div>
			<ul className="flex items-center font-cormorant font-medium text-terracotta text-lg gap-8">
				<li>
					<Link to="/trustees">Trustees</Link>
				</li>

				<li>
					<Link to="/contribute">
						<div className="flex items-center gap-2 py-3 px-8 bg-white rounded-lg">
                            <p>Contribute</p>
                            <img src={arrow} alt="arrow" className="w-4"/>
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
