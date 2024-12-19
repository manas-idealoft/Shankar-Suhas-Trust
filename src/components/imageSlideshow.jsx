import { useState, useEffect } from "react";
import { originImage1, originImage2,originImage3,originImage4,originImage5,originImage6,originImage7,originImage8,originImage9,originImage10,originImage11,originImage12,originImage13, } from "../assets";

const ImageSlideshow = () => {
	// Hardcoded list of image URLs
	const images = [
		originImage1,
		originImage2,
		originImage3,
		originImage4,
		originImage5,
		originImage6,
		originImage7,
		originImage8,
		originImage9,
		originImage10,
		originImage11,
		originImage12,
		originImage13,
	];

	const [activeIndex, setActiveIndex] = useState(0);

	// Automatic cycling of images
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval); // Clean up on component unmount
	}, [images.length]);

	const handleThumbnailClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="flex flex-col items-center w-full h-full py-12">
			{/* Main Display */}
			<div className="relative w-full h-fit flex justify-center items-center">
				{/* Thumbnails on top of the main image */}
				<div className="absolute bottom-8 flex overflow-x-scroll space-x-4 w-full justify-center px-4 scrollbar-hide z-10 p-2 rounded-lg">
					{images.map((image, index) => (
						<div
							key={index}
							className={`flex-shrink-0 cursor-pointer rounded-lg border-2 ${
								index === activeIndex
									? "border-terracotta scale-110 brightness-75"
									: "border-transparent"
							} transition-all duration-200`}
							onClick={() => handleThumbnailClick(index)}
						>
							<img
								src={image}
								alt={`Thumbnail ${index + 1}`}
								className="h-24 w-24 object-cover rounded-md "
							/>
						</div>
					))}
				</div>

				{/* Main Image */}
				<img
					src={images[activeIndex]}
                    alt={`Slide ${activeIndex + 1}`}
                    className="object-contain w-full"
                />
            </div>
		</div>
	);
};

export default ImageSlideshow;