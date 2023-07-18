import { date } from "quasar";

export const stringToDatetime = (str) => {
  return date.formatDate(str, "YYYY/MM/DD HH:mm");
};
