import styles from "./Homepage.module.css";
import { Flex, Image, Title, Text } from "@mantine/core";
import buildingImage from "../../assets/vectorBuildingImage.png";

export const Homepage = () => {
  return (
    <>
      <Flex className={styles.container}>
        <Image className={styles.image} src={buildingImage} />
        <Flex>
        <Title className={styles.title}>CoproSync</Title>
        <Text className={styles.slogan}> Votre copropriété en toute simplicité ! </Text>
        <Text> Connectez-vous pour accèder à votre compte </Text>
        </Flex>
      </Flex>
    </>
  );
};
