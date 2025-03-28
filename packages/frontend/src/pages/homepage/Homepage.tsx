import styles from "./Homepage.module.css";
import { Flex, Image, Title, Text } from "@mantine/core";
import buildingImage from "../../assets/vectorBuildingImage.png";
import { useTranslation } from "react-i18next";
import { LoginForm } from "./loginForm/LoginForm";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftBLock}>
        <Image className={styles.image} src={buildingImage} />
      </div>

      <div className={styles.rightBlock}>
        <Flex mb="xl" direction="column">
        <Title>
          {t("homepage.brand.name.app.title")}
        </Title>
        <Text mt="sm">
          {" "}
          {t("homepage.slogan.condominium.subtext")}{" "}
        </Text>
        </Flex>
        <Text mb="lg">
          {t("homepage.connexion.login.account.subtext")}
        </Text>
        <LoginForm/>
        <Text 
        size="sm"
        mb="xl">
          {t("homepage.password.forgotten.label.subtext")}
        </Text>       
        <Text size="sm"
        className={styles.link}
         onClick={() => navigate("/register")}>
          {t("homepage.connexion.register.account.subtext")}
        </Text>
      </div>
    </div>
  );
};
