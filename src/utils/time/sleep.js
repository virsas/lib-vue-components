export const sleep = (seconds) => {
  return new Promise((res) => setTimeout(res, seconds * 1000));
};
