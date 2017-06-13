/**
 *
 */

const periods = 12;

/**
 * Returns the loan's term in months.
 */
function terms(duration) {
  return duration * periods;
}

/**
 * Returns the loan's monthly interest rate.
 */
function monthlyRate(rate) {
  return rate / periods;
}

/**
 * Returns the amount of interest for the value p with rate r
 */
function interest(principal, rate) {
  return principal * monthlyRate(rate);
}

/**
 * Returns the monthly amount to be paid in a annuity mortgage
 * p = principal (initial amount)
 * r = yearly interest rate
 * n = number of years
 */
function annuity(principal, rate, duration) {
  const i = monthlyRate(rate);
  const t = Math.pow(1 + i, terms(duration));
  return i * principal * t / (t - 1);
}

/**
 * Returns the monthly amount to be paid in a linear mortgage
 */
function linear(principal, duration) {
  return principal / terms(duration);
}

/**
 * Returns the montly payments for a mortgage of the specified type.
 */
export default function payments(principal, rate, duration, type) {
  return Array.apply(null, Array(terms(duration))).map((d, i, a) => {
    d = {
      "id" : i,
      "principal" : (i === 0 ? principal : a[i - 1].principal - a[i - 1].amortization)
    };
    d.interest = interest(d.principal, rate);
    if (type === "annuity") {
      d.payment = annuity(principal, rate, duration);
      d.amortization = d.payment - d.interest;
    } else {
      d.amortization = linear(principal, duration);
      d.payment = d.amortization + d.interest;
    }
    return a[i] = d;
  });
}
