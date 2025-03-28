import styles from "./Register.module.css";
import { useTranslation } from "react-i18next";
import { RegisterForm } from "./registerForm/RegisterForm";
import { Title, Image, Flex } from "@mantine/core";
import buildingPeople from "../../assets/buildingPeople.jpg";

export const Register = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
        <Flex direction="column" justify="center" h="100%" mx="auto" my="auto">

      <div className={styles.leftBLock}>
          <Title order={1} mb="md">
            {t("register.page.title.text")}
          </Title>
          <RegisterForm />
      </div>
        </Flex>
      <div className={styles.rightBlock}>
        <Image className={styles.image} src={buildingPeople}/>
      </div>
    </div>
  );
};
