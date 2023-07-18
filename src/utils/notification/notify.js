import { Notify } from "quasar";

export const notify = ({
  header = null,
  message = null,
  color = "negative",
  textColor = null,
  position = "top-right",
  timeout = 10000,
}) => {
  let text = "white";
  if (textColor) {
    text = textColor;
  } else {
    if (["info", "warning"].includes(color)) {
      text = "black";
    }
  }

  Notify.create({
    message: header,
    caption: message,
    color: color,
    textColor: text,
    position: position,
    actions: [{ icon: "close", color: text }],
    timeout: timeout,
    progress: true,
  });
};
