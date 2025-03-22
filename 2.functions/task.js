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



function summElementsWorker(...arr) {
  if (!arr.length) return 0;
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  arr.forEach(element => {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  });
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  arr.forEach(element => {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  });
  
  return countEvenElement ? sumEvenElement / countEvenElement : 0;
}

console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));
console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));


const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let max = func(...arrOfArr[i]);
    if (maxWorkerResult < max) {
      maxWorkerResult = max;
    }
  }
  return maxWorkerResult;
}


console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));


