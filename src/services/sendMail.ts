import type { SendMail } from "@/types";

const API = import.meta.env.VITE_API_URL as string;

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
    console.log({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();

  return result;
};

export default sendMail;
