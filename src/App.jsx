import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Contribute from "./pages/contribute";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TrusteePopUp from "./components/trusteePopUp";

const AppLayout = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// Function to open popup
	const openPopup = () => setIsPopupOpen(true);
	// Function to close popup
	const closePopup = () => setIsPopupOpen(false);

	return (
		<div className="bg-main-bg bg-beige h-full overflow-hidden">
			<Navbar onTrusteesClick={openPopup} />
			<Outlet />
			<Footer />

			{/* Render Popup if isPopupOpen is true */}
			{isPopupOpen && <TrusteePopUp onClose={closePopup} />}
		</div>
	);
};

// Define routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/contribute", element: <Contribute /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
