// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

function printInstructions() {
  console.log('Find the sum of all the multiples of 3 or 5 below 1000');
}

function sumOfMultiples(arr, num) {
  //arr should be [3, 5] for multiples of 3 and 5
  //num should be 1000, per the instructions
  //declare a counter
  //declare a total sum
  //while counter is less than 1000 counter ++
  //for each item in the array...
  //if counter mod array item is 0, add to total sum
  let counter = 0;
  let sum = 0;
  while (counter < num) {
    console.log('sum', sum);
    console.log('counter', counter);
    for (let i = 0; i < arr.length; i++) {
      if (counter % arr[i] === 0) {
        sum += counter;
      }
    }
    counter++;
  }
  console.log(sum);
}

printInstructions();

sumOfMultiples([3, 5], 1000);

