import type React from "react";

interface ImageGridProps {
	images: { src: string; alt: string }[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
	// Create chunks of images for each column
	const chunkSize = Math.ceil(images.length / 4);
	const columns = Array.from({ length: 4 }, (_, i) =>
		images.slice(i * chunkSize, (i + 1) * chunkSize)
	);

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full">
			{columns.map((column, columnIndex) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<div key={columnIndex} className="grid gap-2 md:gap-4">
					{column.map((image, imageIndex) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={imageIndex}
							className="cursor-pointer aspect-[4/3] md:aspect-square"
							data-lightbox="true"
						>
							<img
								src={image.src}
								alt={image.alt}
								className="h-full w-full rounded-sm object-cover"
								loading="lazy"
								decoding="async"
							/>
						</div>
					))}
				</div>
			))}
		</div>
	);
};
