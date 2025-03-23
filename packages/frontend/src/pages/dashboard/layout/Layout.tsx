import styles from "./Layout.module.css";
import { AppShell, Avatar, Burger, Flex, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import {
  IconFriends,
  IconLayoutDashboard,
  IconBuildings,
  IconUser,
  IconBellRinging,
  IconLogout,
} from "@tabler/icons-react";
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
            <Flex className={styles.icons}>
              <IconBellRinging style={{ cursor: "pointer" }} size={25} />
              <Avatar size="lg">
                <IconUser style={{ cursor: "pointer" }} size={40} />
              </Avatar>
            </Flex>
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="sm" style={{ backgroundColor: "#fafafa" }}>
        <Flex className={styles.navCategory}>
          <div className={styles.navLabel}>
            <IconLayoutDashboard /> {""}
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
        </Flex>

        <Flex className={styles.navCategory}>
          <div className={styles.navLabel}>
            <IconBuildings /> {""}
            {t("dashboard.side.navbar.condominium.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard/administration")}
          >
            {t("dashboard.side.navbar.administrative.management.view.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard/technical")}
          >
            {t("dashboard.side.navbar.technical.management.view.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard/financial")}
          >
            {t("dashboard.side.navbar.financial.management.view.label")}
          </div>
        </Flex>

        <Flex className={styles.navCategory}>
          <div className={styles.navLabel}>
            <IconFriends /> {""}
            {t("dashboard.side.navbar.team.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard/profile")}
          >
            {t("dashboard.side.navbar.profile.view.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard/co_owners")}
          >
            {t("dashboard.side.navbar.coowners.view.label")}
          </div>
          <div
            className={styles.navLink}
            onClick={() => navigate("/dashboard/union_council")}
          >
            {t("dashboard.side.navbar.union.concil.view.label")}
          </div>
        </Flex>
        <Flex mt={150}>
          <IconLogout />
          <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            {t("dashboard.side.navbar.log.out.label")}
          </div>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: "#eff3f4" }}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
