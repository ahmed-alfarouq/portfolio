import type { SendMail } from "@/types";

const API = import.meta.env.VITE_API_URL as string;

const sendMail = async ({ name, email, subject, message }: SendMail) => {
  try {
    const response = await fetch(`${API}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
    console.log("res:", response);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    throw Error((error as Error).message);
  }
};

export default sendMail;
