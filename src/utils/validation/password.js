export const isGoodPassword = (val) => {
  return (
    val.length >= 10 &&
    /[a-z]/.test(val) &&
    /[A-Z]/.test(val) &&
    /[0-9]/.test(val) &&
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(val)
  );
};
