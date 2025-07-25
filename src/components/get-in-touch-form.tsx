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
		<div className="relative min-h-[600px] md:min-h-[900px] overflow-hidden flex items-center justify-center bg-[url('../assets/get-in-touch-bg.png')] bg-cover bg-center">
			<section className="w-full max-w-lg mx-auto py-10 px-6 md:px-10 bg-white/90 rounded-2xl shadow-xl flex flex-col items-center">
				<h1 className="text-3xl md:text-4xl font-semibold text-black mb-2 text-center">Get in Touch</h1>
				<div className="flex items-center gap-2 mb-6">
					<Phone className="text-brand-primary" />
					<span className="text-xl md:text-2xl text-black">030 825 0051</span>
				</div>
				<form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-full">
					<div className="space-y-2 w-full">
						<label className="block text-black text-base md:text-lg font-medium">
							What can we help you with?
						</label>
						<select
							name="inquiry"
							value={formData.inquiry}
							onChange={handleChange}
							className="w-full p-3 border border-gray-200 rounded-lg bg-white text-black"
						>
							<option value="">Select an option</option>
							<option value="investment">Investment Inquiry</option>
							<option value="leasing">Leasing</option>
							<option value="other">Other</option>
						</select>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
						<div className="space-y-2">
							<label className="block text-black text-base md:text-lg font-medium">
								Email
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Enter your email address"
								className="w-full p-3 border bg-white border-gray-200 rounded-lg text-black"
							/>
						</div>

						<div className="space-y-2">
							<label className="block text-black text-base md:text-lg font-medium">
								Phone Number
							</label>
							<input
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								placeholder="Enter your phone number"
								className="w-full p-3 border bg-white border-gray-200 rounded-lg text-black"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
						<div className="space-y-2">
							<label className="block text-black text-base md:text-lg font-medium">
								First Name
							</label>
							<input
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								placeholder="John"
								className="w-full p-3 border bg-white border-gray-200 rounded-lg text-black"
							/>
						</div>

						<div className="space-y-2">
							<label className="block text-black text-base md:text-lg font-medium">
								Last Name
							</label>
							<input
								type="text"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								placeholder="Doe"
								className="w-full p-3 border bg-white border-gray-200 rounded-lg text-black"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<label className="block text-black text-base md:text-lg font-medium">
							Message
						</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Message body"
							rows={6}
							className="w-full p-3 border bg-white border-gray-200 rounded-lg resize-none text-black"
						/>
					</div>

					<div className="pt-2 md:pt-4">
						<button
							disabled={status.type === "loading"}
							type="submit"
							className="w-full md:w-auto cursor-pointer flex items-center justify-center md:justify-start bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all hover:ring-2 hover:ring-brand-primary hover:ring-offset-2"
						>
							{status.type === "loading" && (
								<LoaderCircle className="animate-spin mr-2" />
							)}
							Send Message
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};
