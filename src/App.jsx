import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Contribute from "./pages/contribute";
import Trustees from "./pages/trustees";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const AppLayout = () => (
	<div className="bg-main-bg h-full overflow-hidden">
		<Navbar />
    <Outlet />
    <Footer/>
	</div>
);

// Define routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/contribute", element: <Contribute /> },
			{ path: "/trustees", element: <Trustees /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;