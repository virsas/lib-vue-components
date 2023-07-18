import { date } from "quasar";

export const stringToTime = (str) => {
  return date.formatDate(str, "HH:mm");
};
