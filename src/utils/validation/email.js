export const isValidEmail = (val) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(val)) {
    return true;
  } else {
    return false;
  }
};
