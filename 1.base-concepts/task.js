"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
  } else if (d == 0) {
    arr[0] = -b/(2*a);
  }
  return arr;
}
solveEquation(1, 5, 4)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  }
  let PerkFormula = percent/100/12;
  let AmoFormula = amount - contribution;
  let amountPerMonth = AmoFormula * (PerkFormula + (PerkFormula / (((1 + PerkFormula)**countMonths) - 1)));
  let totalAmount = amountPerMonth * countMonths;
  return Number(totalAmount.toFixed(2));
}
calculateTotalMortgage(10, 0, 10000, 36)