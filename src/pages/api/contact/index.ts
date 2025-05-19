import type { APIRoute } from "astro";


export const prerender = false;

export const POST: APIRoute = async ({ request }) => {

	try {
		const data = await request.json();

		const requiredFields = [
			"inquiry",
			"email",
			"phone",
			"firstName",
			"lastName",
			"message",
		];
		for (const field of requiredFields) {
			if (!data[field]) {
				return new Response(
					JSON.stringify({
						message: `${field} is required`,
					}),
					{ status: 400 },
				);
			}
		}

		// TODO: Add your email service integration here
		// Example: SendGrid, Nodemailer, etc.

		// For now, just log the data
		console.log("Form submission:", data);

		return new Response(
			JSON.stringify({
				message: "Message sent successfully",
			}),
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error processing contact form:", error);

		return new Response(
			JSON.stringify({
				message: "There was an error processing your request",
			}),
			{ status: 500 },
		);
	}
};
