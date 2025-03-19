import { z } from "zod";

export const LoginSchema =(t: (key: string) => string) => z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: t("login.form.email.error.required") })
    .email({ message: t("login.form.email.error.invalid") }),
  password: z
    .string()
    .nonempty({ message: t("login.form.password.error.required") })
    .min(8, { message: t("login.form.password.error.short") })
    .refine((val) => /[A-Z]/.test(val), {
      message: t("login.form.password.error.uppercase"),
    })
    .refine((val) => /[a-z]/.test(val), {
      message: t("login.form.password.error.lowercase"),
    })
    .refine((val) => /\d/.test(val), {
      message: t("login.form.password.error.number"),
    })
    .refine((val) => /[@$!%*?&#]/.test(val), {
      message:
      t("login.form.password.error.special"),
    }),
});

export type LoginSchemaType = z.infer<ReturnType<typeof LoginSchema>>;
