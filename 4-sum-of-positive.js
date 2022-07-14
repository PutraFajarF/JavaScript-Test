function positiveSum(arr) {
  let negatif = [];
  let result = 0;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] < 0) {
      negatif.push(arr[i])
    } else {
      result += arr[i]
    }
  }
  return result;
};