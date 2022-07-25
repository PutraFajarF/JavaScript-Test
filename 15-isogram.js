// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that 
// contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  //...
  if (str.isEmpty) {
    return true;
  } else {
    str = str.toLowerCase();
  }

  let splitWord = str.split('');
  let sortWord = splitWord.sort();

  for (let i = 0; i < sortWord.length; i++) {
    if (sortWord[i] === sortWord[i + 1]) {
      return false;
    }
  }
  return true;
};