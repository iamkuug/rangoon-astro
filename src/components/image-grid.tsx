import type React from "react";
import Masonry from "react-masonry-css";

interface ImageGridProps {
	images: { src: string; alt: string }[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
	const breakpointColumnsObj = {
		default: 3,
		1100: 3,
		700: 2,
		500: 1,
	};

	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		>
			{images.map((image, index) => (
				<div key={index} className="cursor-pointer">
					<img
						src={image.src}
						alt={`Property ${index + 1}`}
						className="w-full h-auto object-contain"
					/>
				</div>
			))}
		</Masonry>
	);
};
