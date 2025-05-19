export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const requiredFields = [
      "inquiry",
      "email",
      "phone",
      "firstName",
      "lastName",
      "message"
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        return new Response(
          JSON.stringify({
            message: `${field} is required`
          }),
          { status: 400 }
        );
      }
    }
    console.log("Form submission:", data);
    return new Response(
      JSON.stringify({
        message: "Message sent successfully"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        message: "There was an error processing your request"
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
