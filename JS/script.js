// Task-1 Bir function yazirsiz arrayde olan tek ededleri toplayib qaytarsin.

function Sum(arr, callback) {
  // debugger
  let result = 0;
  for (const item of arr) {
    if (callback(item)) {
      result += item;
    }
  }
  return result;
}

// CallBack -- funksiyada diger parametr olaraq otururuk.

// let isOdd = (num) => num > 0;

// function isEven(num) {
//   return num % 2 == 0;
// }
// function isNegative(num) {
//   return num < 0;
// }
//CallBackFunctions

// console.log(sumOddNumbers([1,2,3,5,6,7,11]));

// console.log(sumOddNumbers([1,2,3,7,9,10],isOdd))
// console.log(Sum([1, 2, -3, 4, 5, -6], isNegative));

// Anonim Funsiyalar -Only one time useable
console.log(Sum([1, 2, 3, 4, 5], function (num){
    return num>1;
}));
// console.log(Sum([1, 2, 3, 4, 5], isEven));
