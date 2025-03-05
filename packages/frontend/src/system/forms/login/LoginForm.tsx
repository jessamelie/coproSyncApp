import { useTranslation } from "react-i18next";
import { TextInput } from "@mantine/core";
import styles from "./LoginForm.module.css"
import { IconAt, IconLockPassword } from '@tabler/icons-react';

export const LoginForm = () => {
    const { t } = useTranslation();
    return (
        <>
            <form>
                <div className={styles.formContainer}>
                <TextInput
                radius="xl"
                type="email"
                placeholder={t("login.form.email.label.placeholder")} 
                label={t("login.form.email.label.text")} 
                withAsterisk
                leftSection={<IconAt size={15}/>}/>
                <TextInput
                radius="xl"
                type="password" 
                placeholder={t("login.form.password.label.placeholder")} 
                label={t("login.form.password.label.text")} 
                withAsterisk
                leftSection={<IconLockPassword size={15}/>}/>
                </div>
            </form>
        </>
    )
}