import { date } from "quasar";

export const stringToDate = (str) => {
  return date.formatDate(str, "YYYY/MM/DD");
};
