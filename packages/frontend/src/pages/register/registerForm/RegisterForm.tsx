import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RegisterSchema, RegisterSchemaType } from "./RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import styles from "./RegisterForm.module.css";

export const RegisterForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting},
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema(t)),
    defaultValues: {
      lastName: "",
      firstName: "",
      phoneNumber: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    mode: "onChange", 
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (
    data: RegisterSchemaType
  ) => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = storedUsers.some(
      (user: RegisterSchemaType) => user.email === data.email
    );

    if (userExists) {
      alert(t("register.form.user.already.exist.alert"));
      return;
    }

    const newUsers = {
      ...data,
    };

    storedUsers.push(newUsers);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert(t("register.form.account.created.success.alert"));
    console.log("✅​ Users:", storedUsers);
    navigate("/");
  };

  const onError = (errors: FieldErrors<RegisterSchemaType>) =>
    console.log("❌ Register Form error", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className={styles.formContainer}>
        <TextInput
          radius="xl"
          type="text"
          placeholder={t("register.form.lastName.label.placeholder")}
          label={t("register.form.lastName.label.text")}
          withAsterisk
          {...register("lastName")}
          error={errors.lastName?.message}
        />
        <TextInput
          radius="xl"
          type="text"
          placeholder={t("register.form.firstName.label.placeholder")}
          label={t("register.form.firstName.label.text")}
          withAsterisk
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <TextInput
          radius="xl"
          type="text"
          placeholder={t("register.form.phone.number.label.placeholder")}
          label={t("register.form.phone.number.label.text")}
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message}
        />
        <TextInput
          radius="xl"
          type="email"
          placeholder={t("register.form.email.label.placeholder")}
          label={t("register.form.email.label.text")}
          withAsterisk
          {...register("email")}
          error={errors.email?.message}
        />
        <PasswordInput
          radius="xl"
          placeholder={t("register.form.password.label.placeholder")}
          label={t("register.form.password.label.text")}
          withAsterisk
          {...register("password")}
          error={errors.password?.message}
        />
        <PasswordInput
          radius="xl"
          placeholder={t(
            "register.form.password.confirmation.label.placeholder"
          )}
          label={t("register.form.password.confirmation.label.text")}
          withAsterisk
          {...register("passwordConfirmation")}
          error={errors.passwordConfirmation?.message}
        />
        <Button
          type="submit"
          variant="light"
          color="#818787"
          radius="md"
          mt="sm"
          mb="md"
          disabled={!isValid || isSubmitting}
        >
          {t("register.form.submit.button.text")}
        </Button>
      </div>
    </form>
  );
};
