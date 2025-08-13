import type { SendMail } from "@/types";

const API = (import.meta.env.VITE_API_URL || process.env.API_URL) as string;

const sendMail = async ({ name, email, subject, message }: SendMail) => {
  const response = await fetch(`${API}/api/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email, subject, message }),
  });

  if (!response.ok) {
    throw new Error("Something went wrong. Please try again later.");
  }

  const result = await response.json();

  return result;
};

export default sendMail;
