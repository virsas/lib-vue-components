import { date } from "quasar";

export const currentYear = () => {
  const timeStamp = Date.now();
  return date.formatDate(timeStamp, "YYYY");
};
