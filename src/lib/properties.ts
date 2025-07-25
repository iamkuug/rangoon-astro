import infTower from "../assets/infinity-towers/inf-1.png"
import huaweiTower from "../assets/huawei/h-1.png"
import eyTower from "../assets/ey/ey-1.png"
import infLogoGroup from "../assets/logo-groups/infinity-tower-logo-group.png"

export const properties = [
	{
		
		image: infTower.src,
		name: "Infinity Tower",
		location: "Rangoon Lane Cantoments",
		status: "Completed",
		info: "Nine(9) storey grade A office space designed by AF&A Architects Completed January 2020",
		occupancy: "98%",
		size: "11,200 sqm",
		tenants: infLogoGroup.src,
		stock_images: [
			"https://goldkeyghana.com/wp-content/uploads/2025/02/Huawei-Exterior-scaled-1-2048x1150.jpg",
			"https://goldkeyghana.com/wp-content/uploads/2025/02/Huawei-Building-scaled-1-2048x1366.jpg",
		],
		redirect: "/property-portfolio/cantonments-city",
	},
	{
		image: huaweiTower.src,
		name: "Huawei Building ",
		location: "Rangoon Lane, Cantoments",
		status: "Completed",
		info: "An ultra modern 6-storey office building completed in March 16",
		occupancy: "100%",
		size: "6,5000 sqm",
		tenants: [],
		stock_images: [
			"https://goldkeyghana.com/wp-content/uploads/2025/02/IMG_1174-scaled-1-2048x1536.jpg",
			"https://goldkeyghana.com/wp-content/uploads/2025/02/int-10.jpg",
		],
		redirect: "/property-portfolio/the-exchange",
	},
	{
		image: eyTower.src,
		name: "EY Building",
		location: "Rangoon Lane, Cantoments",
		status: "Completed",
		info: "An iconic ten(10)-storey, sustainable Grade A office building with retail space. Completed in April 2021",
		occupancy: "83%",
		size: "13,500 sqm",
		tenants: ["Private Residents"],
		stock_images: [
			"https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-20-scaled-1-2048x1366.jpg",
			"https://goldkeyghana.com/wp-content/uploads/2025/02/High-Spec-Fit-out-1-scaled-1-2048x1366.jpg",
		],
		redirect: "/property-portfolio/polo-heights",
	},
];
