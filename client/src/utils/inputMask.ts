export default function inputMask(value: string) {
  const matches = value.replace(/\D/g, "").match(/(\d{0,2})(\d{0,2})(\d{0,2})/);

  if (!matches) return "";

  if (!matches[2]) {
    return matches[1];
  }

  if (!matches[3]) {
    return matches[1] + "-" + matches[2];
  }

  return matches[1] + "-" + matches[2] + "-" + matches[3];
}
