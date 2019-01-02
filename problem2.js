//Each new term in the Fibonacci sequence is generated by adding the
//previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
//  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
//By considering the terms in the Fibonacci sequence whose values do
//not exceed four million, find the sum of the even-valued terms.

function printInstructions() {
  console.log('find the sum of all even numbered fibinocci numbers where the value is less than 4,000,000');
}

//initialize the sum at 0 and pass it recursively to the function
//initialize the first two numbers in the sequesnce at 1
//maxValue should be 4,000,000 per instructions
function fibSumEven(maxValue, num=1, prevNum=1, sum=0) {
  //num is the current fibonocci number.  If it is divisible
  //by 2, add it to the sum
  if (num % 2 === 0) {
    sum += num;
  }
  if (num < maxValue) {
    return fibSumEven(maxValue, num + prevNum, num, sum);
  }
  return sum;
}

printInstructions();
console.log(fibSumEven(4000000));
