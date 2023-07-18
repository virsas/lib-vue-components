import { date } from "quasar";

export const stringToTimestamp = (str) => {
  return date.formatDate(str, "X");
};
