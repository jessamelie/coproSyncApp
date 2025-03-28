import { Input } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { useTranslation } from "react-i18next";

export const SearchBar = () => {
    const { t } = useTranslation();
    return (
        <Input
            placeholder={t("dashboard.searchbar.placeholder")}
            size="md"
            variant="filled"
            leftSection={<IconSearch />}
        />
    )
}