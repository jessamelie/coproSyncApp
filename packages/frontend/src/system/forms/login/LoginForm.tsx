import { useTranslation } from "react-i18next";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import styles from "./LoginForm.module.css";
import { IconAt, IconLockPassword } from "@tabler/icons-react";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "./LoginSchema";
import {useNavigate} from "react-router-dom";

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  //Using Local Storage for learning purposes
  const onSubmit: SubmitHandler<LoginSchemaType> = async (
    data: LoginSchemaType
  ) => {
    console.log("Form Data:", data);
    const dummyToken = "defgevd4dfdc554855d";
    localStorage.setItem("token", dummyToken);
    console.log("✅ Token stored in Local Storage");
    navigate("/dashboard");
  };

  const onError = (errors: FieldErrors<LoginSchemaType>) =>
    console.log("❌ Form error:", errors);
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className={styles.formContainer}>
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
          type="password"
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
        >
          {t("login.form.submit.button.text")}
        </Button>
      </div>
    </form>
  );
};
