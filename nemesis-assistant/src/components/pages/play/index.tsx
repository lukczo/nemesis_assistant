import { useTranslation } from "react-i18next";
import { MainLayout } from "../../main-layout";
import { Controls } from "../../controls";
import { Button } from "../../button";

export const PlayPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainLayout
        top={
          <Controls>
            <Button>Left</Button>
            <Button>Right</Button>
          </Controls>
        }
        main={<p>{t("translated_paragraph")}</p>}
        bottom={
          <Controls>
            <Button>Bottom</Button>
          </Controls>
        }
      />
    </>
  );
};
