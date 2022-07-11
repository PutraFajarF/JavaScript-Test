const quarterOf = (month) => {
  // Your code here
  if (month < 4) {
    return 1;
  }
  if (month < 7 && month > 3) {
    return 2;
  }
  if (month < 10 && month > 6) {
    return 3
  }
  if (month < 13 && month > 9)  {
    return 4;
  }
};