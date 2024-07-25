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

export function formatNumberWithoutSymbol(number, locale) {
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(number);
}

export function parseFormattedNumber(formattedNumber) {
  const cleanedNumber = formattedNumber.replace(/[^\d.-]/g, "");
  const number = parseFloat(cleanedNumber);

  return isNaN(number) ? null : number;
}
