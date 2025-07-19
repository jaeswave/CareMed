export const sendEmail = async (formData) => {
  const API_KEY = import.meta.env.VITE_BREVO_API_KEY;
  const SENDER = import.meta.env.VITE_BREVO_SENDER_EMAIL;
  const RECEIVER = import.meta.env.VITE_BREVO_RECEIVER_EMAIL;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: formData.name, email: SENDER },
      to: [{ email: RECEIVER }],
      subject: "New message from CAREMED Contact Form",
      htmlContent: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong><br/>${formData.message}</p>
      `,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Brevo error:", errorData);
    throw new Error("Failed to send message. Please try again.");
  }

  return response.json();
};
