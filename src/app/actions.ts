
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  mobile: z.string().min(10, "Please enter a valid mobile number."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be less than 500 characters."),
});

export type FormState = {
  message: string;
  errors?: {
    fullName?: string[];
    email?: string[];
    mobile?: string[];
    message?: string[];
  };
  isSuccess: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    };
  }

  try {
    console.log("New contact form submission:", validatedFields.data);

    // Simulate a successful API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: "Thank you! Your message has been sent successfully.",
      errors: undefined,
      isSuccess: true,
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      errors: undefined,
      isSuccess: false,
    };
  }
}
