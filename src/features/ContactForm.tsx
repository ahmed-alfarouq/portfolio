import { useState, useTransition } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";

import FormInput from "@/components/FormInput";
import FormTextarea from "@/components/FormTextarea";

import { contactSchema, type ContactSchema } from "@/schemas";

import { Send } from "lucide-react";
import sendMail from "@/services/sendMail";

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: yupResolver(contactSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ContactSchema> = (data) => {
    setErrorMessage("");
    setSuccessMessage("");
    startTransition(async () => {
      try {
        const result = await sendMail({ ...data });
        if ("error" in result) {
          setErrorMessage(result.error);
          return;
        }
        setSuccessMessage(result.message);
        reset(defaultValues);
      } catch (error) {
        setErrorMessage((error as Error).message);
      }
    });
  };

  return (
    <form className="card space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="name"
        label="Name"
        placeholder="Ahmed Al-Farouq"
        error={errors.name?.message}
        control={control}
        disabled={isPending}
      />
      <FormInput
        name="email"
        label="Email"
        type="email"
        placeholder="your@email.com"
        error={errors.email?.message}
        control={control}
        disabled={isPending}
      />
      <FormInput
        name="subject"
        label="Subject"
        placeholder="Project inquiry"
        error={errors.subject?.message}
        control={control}
        disabled={isPending}
      />
      <FormTextarea
        rows={4}
        name="message"
        label="Message"
        control={control}
        error={errors.message?.message}
        placeholder="Tell me about your project..."
        disabled={isPending}
      />
      {errorMessage && (
        <span className="form-error w-full" role="alert" aria-live="assertive">
          {errorMessage}
        </span>
      )}

      {successMessage && (
        <span
          className="form-success w-full"
          role="alert"
          aria-live="assertive"
        >
          {successMessage}
        </span>
      )}
      <button
        type="submit"
        className="cta-btn w-full rounded-lg"
        disabled={isPending}
      >
        <Send className="w-5 h-5" aria-hidden="true" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
