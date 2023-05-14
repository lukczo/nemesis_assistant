import { useTranslation } from "react-i18next";

export const TestPage = () => {
  const { t } = useTranslation();

  return <div>{t("test_page")}</div>;
};
