// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  // ...
  let arrNumbers = numbers.split(' ');
  let max = arrNumbers[0];
  let min = arrNumbers[0];
   for (let i = 0; i < arrNumbers.length; i++) {
    if (Number(arrNumbers[i]) > max) {
      max = arrNumbers[i];
    } else if (Number(arrNumbers[i]) < min) {
      min = arrNumbers[i];
    }
  }
  return max + " " + min;
};