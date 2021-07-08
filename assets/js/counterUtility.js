function isValidCounter(counter) {
  /* Check if counter is a valid number */
  return !isNaN(counter) && isFinite(counter) && counter != null;
}