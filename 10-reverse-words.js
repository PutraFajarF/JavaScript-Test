function reverseWords(str) {
  // Go for it
  let reverseWord = [];
  let spl = str.split(' ');
  for (let i = 0; i < spl.length; i++) {
    reverseWord.push(spl[i].split('').reverse().join(''));
  }
  return reverseWord.join(' ');
};