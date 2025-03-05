import { useTranslation } from "react-i18next";
import { TextInput } from "@mantine/core";
import styles from "./LoginForm.module.css"

export const LoginForm = () => {
    const { t } = useTranslation();
    return (
        <>
            <form>
                <div className={styles.formContainer}>
                <TextInput
                variant="filled"
                placeholder={t("login.form.email.label.placeholder")} 
                label={t("login.form.email.label.text")} 
                withAsterisk/>
                <TextInput
                type="password" 
                placeholder={t("login.form.password.label.placeholder")} 
                label={t("login.form.password.label.text")} 
                radius="xl"
                withAsterisk/>
                </div>
            </form>
        </>
    )
}