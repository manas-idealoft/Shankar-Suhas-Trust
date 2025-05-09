import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Contribute from "./pages/contribute";
import Purpose from "./pages/purpose";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TrusteePopUp from "./components/trusteePopUp";
import ScrollToTop from "./components/ScrollToTop";

const AppLayout = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// Function to open popup
	const openPopup = () => setIsPopupOpen(true);
	// Function to close popup
	const closePopup = () => setIsPopupOpen(false);

	return (
		<div className="bg-main-bg bg-beige h-full">
			<ScrollToTop />
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
			{ path: "/purpose", element: <Purpose /> },
			{ path: "/contribute", element: <Contribute /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
