
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  mobile: z.string().min(10, "Please enter a valid mobile number."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be less than 500 characters."),
});

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORMSPREE_FORM_ID";

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
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(validatedFields.data),
    });

    if (response.ok) {
      return {
        message: "Thank you! Your message has been sent successfully.",
        errors: undefined,
        isSuccess: true,
      };
    }

    const data = await response.json().catch(() => null);
    const detail = data?.errors?.map((e: { message: string }) => e.message).join(", ");
    return {
      message: detail || "We could not send your message. Please try again.",
      errors: undefined,
      isSuccess: false,
    };
  } catch {
    return {
      message: "Network error. Please check your connection and try again.",
      errors: undefined,
      isSuccess: false,
    };
  }
}
