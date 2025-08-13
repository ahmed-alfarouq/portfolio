import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup
    .string()
    .email("Please, enter a valid email!")
    .required("Email is required!"),
  subject: yup.string().required("Subject is required!"),
  message: yup.string().required("Message is required!"),
});

export type ContactSchema = yup.InferType<typeof contactSchema>;
