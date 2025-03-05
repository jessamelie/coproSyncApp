import styles from "./Homepage.module.css";
import { Flex, Image, Title, Text } from "@mantine/core";
import buildingImage from "../../assets/vectorBuildingImage.png";
import { useTranslation } from "react-i18next";

export const Homepage = () => {
    const { t } = useTranslation();

  return (
    <>
      <Flex className={styles.container}>
        <Image className={styles.image} src={buildingImage} />
        <Flex>
        <Title className={styles.title}>{t("homepage.brand.name.app.title")}</Title>
        <Text className={styles.slogan}> {t("homepage.slogan.condominium.subtext")} </Text>
        <Text>{t("homepage.connexion.login.account.subtext")}</Text>
        </Flex>
      </Flex>
    </>
  );
};
