/*
P = principal loan amount
r = monthly interest rate
n = number of payments
 */

export function calculateRepayments(P, r, n) {
  n = parseFloat(n * 12);
  r = parseFloat(r / 100 / 12);

  const monthly = parseFloat(
    P * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)),
  );
  const total = parseFloat(monthly * n);

  return { monthly, total };
}

export function calculateInterest(P, r, n) {
  P = parseFloat(P);
  r = parseFloat(r / 100 / 12);
  n = parseFloat(n * 12);

  const monthly = P * r;
  const total = monthly * n;

  return { monthly, total };
}
