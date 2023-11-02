export const isValidSlug = (val) => {
  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  if (slugPattern.test(val)) {
    return true;
  } else {
    return false;
  }
};
