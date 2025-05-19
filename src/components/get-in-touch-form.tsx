import React, { type ChangeEvent, type FormEvent } from "react";
import { useState } from "react";
import { LoaderCircle, Phone } from "lucide-react";

import getInTouchBg from "../assets/get-in-touch-bg.png";
import { toast } from "sonner";

export const GetInTouchForm = () => {
	const [formData, setFormData] = useState({
		inquiry: "",
		email: "",
		phone: "",
		firstName: "",
		lastName: "",
		message: "",
	});

	const [status, setStatus] = useState<{
		type: "success" | "error" | "loading" | null;
		message: string;
	}>({
		type: null,
		message: "",
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus({ type: "loading", message: "Sending..." });

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Something went wrong");
			}

			setStatus({
				type: "success",
				message: "Thank you for your message. We will get back to you soon!",
			});

			toast.success(
				"Thank you for your message. We will get back to you soon!",
			);
		} catch (error) {
			toast.error("Something went wrong. Please try again later.");
			setStatus({
				type: "error",
				message:
					error instanceof Error ? error.message : "Something went wrong",
			});
		}
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
								disabled={status.type === "loading"}
								type="submit"
								className="cursor-pointer flex items-center bg-brand-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all hover:ring-2 hover:ring-brand-primary hover:ring-offset-2"
							>
								{status.type === "loading" && (
									<LoaderCircle className="animate-spin mr-2" />
								)}
								Send Message
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};
