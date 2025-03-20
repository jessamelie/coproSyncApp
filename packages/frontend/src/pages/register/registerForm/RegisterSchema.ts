import { z } from "zod";

export const RegisterSchema = (t: (key: string) => string) =>
  z
    .object({
      lastName: z
        .string()
        .trim()
        .nonempty({ message: t("register.form.lastname.error.required") }),
      firstName: z
        .string()
        .trim()
        .nonempty({ message: t("register.form.firstname.error.required") }),
      phoneNumber: z.string().trim(),
      adress: z
        .string()
        .trim()
        .nonempty({ message: t("register.form.adress.error.required") }),
      lotsNumber: z
        .string()
        .trim()
        .nonempty({
          message: t("register.form.appartment.number.error.required"),
        }),
      email: z
        .string()
        .trim()
        .nonempty({ message: t("register.form.email.error.required") })
        .email({ message: t("register.form.email.error.invalid") }),
      password: z
        .string()
        .nonempty({ message: t("register.form.password.error.required") })
        .min(8, { message: t("register.form.password.error.short") })
        .refine((val) => /[A-Z]/.test(val), {
          message: t("register.form.password.error.uppercase"),
        })
        .refine((val) => /[a-z]/.test(val), {
          message: t("register.form.password.error.lowercase"),
        })
        .refine((val) => /\d/.test(val), {
          message: t("register.form.password.error.number"),
        })
        .refine((val) => /[@$!%*?&#]/.test(val), {
          message: t("register.form.password.error.special"),
        }),
      passwordConfirmation: z.string().nonempty({
        message: t("register.form.password.confirmation.error.required"),
      }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: t("register.form.password.confirmation.error.match"),
      path: ["passwordConfirmation"],
    });

    export type RegisterSchemaType = z.infer<ReturnType<typeof RegisterSchema>>;
