import React, { type ChangeEvent, type FormEvent } from "react";
import { useState } from "react";
import { Phone } from "lucide-react";

import getInTouchBg from "../assets/get-in-touch-bg.png";   

export const GetInTouchForm = () => {
	const [formData, setFormData] = useState({
		inquiry: "",
		email: "",
		phone: "",
		firstName: "",
		lastName: "",
		message: "",
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="h-[900px]">
			<section className="flex items-center justify-center pt-10  px-5 ">
				<div className="w-4/5 mx-auto flex flex-col items-start gap-4">
					<h1 className="text-4xl text font-semibold text-brand-primary">
						Get in Touch{" "}
					</h1>
					<div className="flex items-center gap-2">
						<div>
							<Phone className="text-brand-primary" />
						</div>
						<span className="text-2xl text-brand-primary">030 825 0051</span>
					</div>
				</div>
			</section>
			<section className="relative flex items-center justify-center py-10 px-5">
				<img
					src={getInTouchBg.src}
					alt="get-in-touch-bg"
					className="absolute -z-10"
				/>
				<div className="w-4/5 mx-auto flex flex-col items-start gap-4 ">
					<form onSubmit={handleSubmit} className="space-y-6 w-4/5">
						<div className="space-y-2 w-full">
							{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
							<label className="block text-brand-primary text-lg font-medium">
								What can we help you with?
							</label>
							<select
								name="inquiry"
								value={formData.inquiry}
								onChange={handleChange}
								className="w-full p-3 border border-gray-200 rounded-lg bg-white"
							>
								<option value="">Select an option</option>
								<option value="investment">Investment Inquiry</option>
								<option value="leasing">Leasing</option>
								<option value="other">Other</option>
							</select>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<div className="space-y-2">
								{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
								<label className="block text-brand-primary text-lg font-medium">
									Email
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Enter your email address"
									className="w-full p-3 border bg-white border-gray-200 rounded-lg"
								/>
							</div>

							<div className="space-y-2">
								{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
								<label className="block text-brand-primary text-lg font-medium">
									Phone Number
								</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									placeholder="Enter your phone number"
									className="w-full p-3 border bg-white border-gray-200 rounded-lg"
								/>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<div className="space-y-2">
								{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
								<label className="block text-brand-primary text-lg font-medium">
									First Name
								</label>
								<input
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									placeholder="John"
									className="w-full p-3 border bg-white border-gray-200 rounded-lg"
								/>
							</div>

							<div className="space-y-2">
								{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
								<label className="block text-brand-primary text-lg font-medium">
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									placeholder="Doe"
									className="w-full p-3 border bg-white border-gray-200 rounded-lg"
								/>
							</div>
						</div>

						<div className="space-y-2">
							{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
							<label className="block text-brand-primary text-lg font-medium">
								Message
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Message body"
								rows={6}
								className="w-full p-3 border bg-white border-gray-200 rounded-lg resize-none"
							/>
						</div>

						<div className="pt-4">
							<button
								type="submit"
								className="bg-brand-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};
