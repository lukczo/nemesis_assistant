import { useTranslation } from "react-i18next";

import { Navigation } from "../../navigation";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navigation />
      <p>{t("translated_paragraph")}</p>
    </>
  );
};
