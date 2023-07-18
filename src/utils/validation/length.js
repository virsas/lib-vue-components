export const isValidLength = (val, min, max) => {
  if (val.length >= min && val.length <= max) {
    return true;
  } else {
    return false;
  }
};
