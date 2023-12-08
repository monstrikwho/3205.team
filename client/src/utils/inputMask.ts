export default function inputMask(value: string) {
  return (
    value
      .replace(/\D/g, "")
      .match(/(\d{1,2})/g)
      ?.slice(0, 3)
      .join("-") || ""
  );
}
