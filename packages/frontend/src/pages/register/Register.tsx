import styles from "./Register.module.css";
import { useTranslation } from "react-i18next";
import { RegisterForm } from "./registerForm/RegisterForm";
import { Title, Image } from "@mantine/core";
import buildingPeople from "../../assets/buildingPeople.jpg";

export const Register = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <div className={styles.leftContent}>
          <Title order={1} mb="md">
            {t("register.page.title.text")}
          </Title>
          <RegisterForm />
        </div>
      </div>

      <div className={styles.rightBlock}>
        <Image className={styles.image} src={buildingPeople} />
      </div>
    </div>
  );
};
