import { useTranslations } from "next-intl";
import { BookingsPage } from "./BookingsPage";

export default function Page() {
  const t = useTranslations("");

  const strings = {
    cancel: t("bookings.cancel"),
    myBookings: t("bookings.myBookings"),
    noBookings: t("bookings.noBookings"),
    errorBookings: t("bookings.error"),
    loading: t("loading"),
  };

  return <BookingsPage strings={strings} />;
}
