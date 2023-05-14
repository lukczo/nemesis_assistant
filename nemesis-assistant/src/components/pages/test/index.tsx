import { useTranslation } from "react-i18next";
import { Button } from "../../button";

export const TestPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t("test_page")}
      <div>
        <Button onClick={() => window.alert("click!")}>Some button</Button>
      </div>
    </div>
  );
};
