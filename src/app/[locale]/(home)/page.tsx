import { useTranslations } from "next-intl";
import { HomePage } from "./HomePage";

export default function Page() {
  const t = useTranslations("");

  const strings = {
    perHour: t("home.perHour"),
    book: t("home.book"),
    loading: t("loading"),
    search: t("home.search"),
  };

  return <HomePage strings={strings} />;
}
