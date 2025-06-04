import { useState } from "react";
import { ImageGrid } from "../components/image-grid";

type GalleryFilter = "all" | "commercial" | "retail" | "residential";

export const PropertyPortfolio = () => {
	const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>("all");

	const imagesHuawei = [
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/Huawei-Exterior-scaled-1-2048x1150.jpg",
			alt: "Huawei Building Exterior View",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/Huawei-Building-scaled-1-2048x1366.jpg",
			alt: "Huawei Building Front View",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/Huawei-Exterior-scaled-1-2048x1150.jpg",
			alt: "Huawei Building Side View",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-20-scaled-1-2048x1366.jpg",
			alt: "Huawei Building Interior",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-1-scaled-1-2048x1366.jpg",
			alt: "Huawei Building Office Space",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-53-scaled-1-2048x1366.jpg",
			alt: "Huawei Building Meeting Room",
			cols: 1,
			rows: 1,
		},
	];

	const imagesInfinity = [
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1-2048x1536.jpg",
			alt: "Infinity Tower Exterior",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-10.jpg",
			alt: "Infinity Tower Interior 1",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-5.jpg",
			alt: "Infinity Tower Interior 2",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1-2048x1536.jpg",
			alt: "Infinity Tower Front View",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-10.jpg",
			alt: "Infinity Tower Office Space 1",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-5.jpg",
			alt: "Infinity Tower Office Space 2",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1-2048x1536.jpg",
			alt: "Infinity Tower Side View",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-10.jpg",
			alt: "Infinity Tower Meeting Room 1",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-5.jpg",
			alt: "Infinity Tower Meeting Room 2",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1-2048x1536.jpg",
			alt: "Infinity Tower Lobby",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-10.jpg",
			alt: "Infinity Tower Reception",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-5.jpg",
			alt: "Infinity Tower Common Area",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-20-scaled-1-2048x1366.jpg",
			alt: "Infinity Tower Interior Detail",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvWwCXKM9WmZnsB1W4ZuFvdN421n4WhnjGGsdEnod0B41LqyWYr_5nAiFa6_FRjnJjTQ&usqp=CAU",
			alt: "Infinity Tower Exterior Night",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bWJMpYPbjoXBwLNZQYZq6EE4MwKh4oEy6XREG57QyOKz2nGJpukyx98zbZRJ4FZJ_TM&usqp=CAU",
			alt: "Infinity Tower Aerial View",
			cols: 1,
			rows: 1,
		},
	];

	return (
		<div className="property-portfolio-page">
			<section className="flex items-center justify-center pt-16 md:pt-24 pb-4 md:pb-5 px-4 md:px-5">
				<div className="flex flex-col items-start w-full md:w-4/5 mx-auto gap-y-8 md:gap-y-12">
					<div className="w-full">
						<h1 className="text-3xl md:text-4xl text-brand-primary font-semibold">
							Property Portfolio
						</h1>
					</div>
				</div>
			</section>
			<section className="flex items-center justify-center px-4 md:px-5">
				<nav className="w-full md:w-4/5 mx-auto overflow-x-auto pb-2">
					<ul className="flex items-center gap-x-3 md:gap-x-5 py-3 md:py-5 min-w-max">
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<li
							onClick={() => setGalleryFilter("all")}
							className={`hover:bg-brand-primary/10 px-4 md:px-5 py-1 rounded-full cursor-pointer ${galleryFilter === "all" ? "bg-brand-primary/10" : ""} active:scale-105 transition-all ease-in-out`}
						>
							<span className="text-brand-primary font-semibold text-base md:text-lg whitespace-nowrap">
								All
							</span>
						</li>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<li
							onClick={() => setGalleryFilter("commercial")}
							className={`hover:bg-brand-primary/10 px-4 md:px-5 py-1 rounded-full cursor-pointer ${galleryFilter === "commercial" ? "bg-brand-primary/10" : ""} active:scale-105 transition-all ease-in-out`}
						>
							<span className="text-brand-primary font-semibold text-base md:text-lg whitespace-nowrap">
								Commercial
							</span>
						</li>
					</ul>
				</nav>
			</section>
			<section className="px-4 md:px-5 py-4 md:py-5 w-full md:w-4/5 mx-auto">
				<ImageGrid images={imagesInfinity} />
				<div className="py-3 md:py-5">
					<span className="font-semibold text-gray-400 text-lg md:text-xl">
						Commercial
					</span>
					<h1 className="text-lg md:text-xl text-brand-primary font-semibold">
						Huawei Building
					</h1>
				</div>
			</section>
			<section className="px-4 md:px-5 py-4 md:py-5 w-full md:w-4/5 mx-auto">
				<ImageGrid images={imagesHuawei} />
				<div className="py-3 md:py-5">
					<span className="font-semibold text-gray-400 text-lg md:text-xl">
						Commercial
					</span>
					<h1 className="text-lg md:text-xl text-brand-primary font-semibold">
						Infinity Tower
					</h1>
				</div>
			</section>
		</div>
	);
};
