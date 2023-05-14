import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>Nemesis Assistant </h1>
      <h2>We need a cooler name </h2>
      <p>Nothing to see here at the moment</p>
      <p>{t("translated_paragraph")}</p>
    </>
  );
};
