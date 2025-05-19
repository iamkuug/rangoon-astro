import { ImageGrid } from "../components/image-grid";

export const PropertyPortfolio = () => {
	const imagesHuawei = [
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/Huawei-Exterior-scaled-1-2048x1150.jpg",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/Huawei-Building-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/Huawei-Exterior-scaled-1-2048x1150.jpg",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-20-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-1-scaled-1-2048x1366.jpg",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-53-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},

		//dups
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-20-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-1-scaled-1-2048x1366.jpg",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-53-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},

		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-20-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-1-scaled-1-2048x1366.jpg",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-53-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-20-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-1-scaled-1-2048x1366.jpg",
			cols: 2,
			rows: 1,
		},

		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-53-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-53-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},
	];

	const imagesInfinity = [
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1-2048x1536.jpg",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-10.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-5.jpg",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1-2048x1536.jpg",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-10.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-5.jpg",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1-2048x1536.jpg",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-10.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-5.jpg",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1-2048x1536.jpg",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-10.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/int-5.jpg",
			cols: 1,
			rows: 2,
		},
		{
			src: "https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-20-scaled-1-2048x1366.jpg",
			cols: 1,
			rows: 1,
		},
		{
			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvWwCXKM9WmZnsB1W4ZuFvdN421n4WhnjGGsdEnod0B41LqyWYr_5nAiFa6_FRjnJjTQ&usqp=CAU",
			cols: 2,
			rows: 1,
		},
		{
			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bWJMpYPbjoXBwLNZQYZq6EE4MwKh4oEy6XREG57QyOKz2nGJpukyx98zbZRJ4FZJ_TM&usqp=CAU",
			cols: 1,
			rows: 1,
		},
	];

	return (
		<div className="property-portfolio-page">
			<section className=" flex items-center justify-center pt-24 pb-5 px-5 ">
				<div className="flex flex-col items-start w-4/5 mx-auto gap-y-12">
					<div className="w-full">
						<h1 className="text-4xl text-brand-primary font-semibold">
							Property Portfolio
						</h1>
					</div>
				</div>
			</section>
			<section className="flex items-center justify-center px-5">
				<nav className="w-4/5 mx-auto">
					<ul className="flex items-center  gap-x-10 py-5">
						<li>
							<a
								href="/property-portfolio/all"
								className="text-brand-primary font-semibold text-lg"
							>
								All
							</a>
						</li>
						<li>
							<a
								href="/property-portfolio/commercial"
								className="text-brand-primary font-semibold text-lg"
							>
								Commercial
							</a>
						</li>
						<li>
							<a
								href="/property-portfolio/retail"
								className="text-brand-primary font-semibold text-lg"
							>
								Retail
							</a>
						</li>

						<li>
							<a
								href="/property-portfolio/residential"
								className="text-brand-primary font-semibold text-lg"
							>
								Residential
							</a>
						</li>
					</ul>
				</nav>
			</section>
			<section className="px-5 py-5 w-4/5 mx-auto">
				<ImageGrid images={imagesInfinity} />
				<div className="py-5">
					<span className="font-semibold text-gray-400 text-xl">
						Commercial
					</span>
					<h1 className="text-xl text-brand-primary font-semibold">
						Huawei Building
					</h1>
				</div>
			</section>
			<section className="px-5 py-5 w-4/5 mx-auto">
				<ImageGrid images={imagesHuawei} />
				<div className="py-5">
					<span className="font-semibold text-gray-400 text-xl">
						Commercial
					</span>
					<h1 className="text-xl text-brand-primary font-semibold">
						Infinity Tower
					</h1>
				</div>
			</section>
		</div>
	);
};
