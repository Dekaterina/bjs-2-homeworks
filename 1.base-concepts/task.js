//Первая Задача

"use strict"
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }
  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return [root1, root2];
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (percent < 0 || contribution < 0 || amount < 0 || countMonths < 0) {
    return false;
  }
  
  const monthlyInterest = percent / 100 / 12;
  
  const loanBody = amount - contribution;
  
  const monthlyPayment = loanBody * (monthlyInterest + (monthlyInterest / (Math.pow(1 + monthlyInterest, countMonths) - 1)));
  
  const totalAmount = monthlyPayment * countMonths;
  
  return Number(totalAmount.toFixed(2));
}
