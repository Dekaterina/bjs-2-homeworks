function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let num of arr) {
    if (num > max)max = num;
    if(num < min)min = num;
    sum += num;
  }
  const avg = Number((sum / arr.length).toFixed(2));
  return { min, max, avg };
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  const percentP = percent / 100 / 12;
  const creditBody = amount - contribution;
  const monthlyPayment = creditBody * (percentP + (percentP / (((1 + percentP) ** countMonths) - 1)));
  const totalAmount = monthlyPayment * countMonths;
  return Number(totalAmount.toFixed(2));
}
console.log(getArrayParams(-99, 99, 10));
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(getArrayParams(5));




