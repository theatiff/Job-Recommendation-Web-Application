import { Resend } from "resend";

let resend;
if (process.env.RESEND_API_KEY) {
	resend = new Resend(process.env.RESEND_API_KEY);
} else {
	console.warn("RESEND_API_KEY not set; email sending disabled (mock sender in use).");
	resend = {
		emails: {
			send: async (options) => {
				console.log("Mock resend.emails.send called with:", options);
				return { id: "mock-id" };
			},
		},
	};
}

export { resend };
