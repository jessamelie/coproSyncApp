import { useTranslation } from "react-i18next";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import styles from "./LoginForm.module.css";
import { IconAt, IconLockPassword } from "@tabler/icons-react";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "./LoginSchema";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    console.log("Form Data:", data);
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const user = storedUsers.find(
      (user: any) => user.email === data.email && user.password === data.password
    );

    if (user) {
      const dummyToken = "defgevd4dfdc554855d";
      localStorage.setItem("token", dummyToken);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      console.log("✅ Utilisateur connecté, token stocké.");
      navigate("/dashboard");
    } else {
      setErrorMessage(t("login.form.user.not.found.error"));
    }
  };

  const onError = (errors: FieldErrors<LoginSchemaType>) => {
    console.log("❌ Form error:", errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className={styles.formContainer}>
        {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}
        <TextInput
          radius="xl"
          type="email"
          placeholder={t("login.form.email.label.placeholder")}
          label={t("login.form.email.label.text")}
          withAsterisk
          leftSection={<IconAt size={15} />}
          {...register("email")}
          error={errors.email?.message}
        />
        <PasswordInput
          radius="xl"
          placeholder={t("login.form.password.label.placeholder")}
          label={t("login.form.password.label.text")}
          withAsterisk
          leftSection={<IconLockPassword size={15} />}
          {...register("password")}
          error={errors.password?.message}
        />
        <Button
          type="submit"
          variant="light"
          color="#818787"
          radius="md"
          mt="sm"
          mb="md"
        >
          {t("login.form.submit.button.text")}
        </Button>
      </div>
    </form>
  );
};
