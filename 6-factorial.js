function factorial(n)
{
  // Calculate the factorial here
  if (n === 0) {
    return 1;
  } else if (n < 0 || n > 12) {
    throw new RangeError;
  } else {
    result = n * factorial(n - 1)
    return result;
  }
};