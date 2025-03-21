import styles from "./Layout.module.css";
import {
  AppShell,
  Avatar,
  Burger,
  Flex,
  Group,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { IconUser } from "@tabler/icons-react";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 160, md: 200, lg: 240 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" style={{ width: "100%" }}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Flex className={styles.header}>
            <Title order={2}>{t("homepage.brand.name.app.title")}</Title>
            <Avatar size="lg">
              <IconUser
                className={styles.profileIcon}
                size={35}
                onClick={() => navigate("/profile")}
              />
            </Avatar>
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="sm">
        <div className={styles.navLinks}>
          <div>
            {t("dashboard.side.navbar.general.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard")}
          >
            {t("dashboard.side.navbar.dashboard.view.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard/agenda")}
          >
            {t("dashboard.side.navbar.agenda.view.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard/messages")}
          >
            {t("dashboard.side.navbar.message.view.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard/copropriete")}
          >
            {t("dashboard.side.navbar.condominium.view.label")}
          </div>
          <div>
            {t("dashboard.side.navbar.administrative.label")}
          </div>
        </div>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
