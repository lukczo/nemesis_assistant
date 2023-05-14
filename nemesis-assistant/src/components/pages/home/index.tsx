import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t("translated_paragraph")}</p>
    </>
  );
};
