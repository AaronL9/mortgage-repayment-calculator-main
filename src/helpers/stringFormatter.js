import numeral from "numeral";

export function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

export function formatCurrencyWithSuffix(number) {
  const formattedResult = numeral(number).format("($ 0.00 a)");
  const lastChar = formattedResult[formattedResult.length - 1];
  return formattedResult
    .replace("$", "£")
    .replace(lastChar, lastChar.toUpperCase());
}
