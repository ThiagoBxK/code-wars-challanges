function printerError(string) {
  const errosCount = string.replace(/[a-mA-M]/g, "").length;

  return `${errosCount}/${string.length}`;
}

export default printerError;
