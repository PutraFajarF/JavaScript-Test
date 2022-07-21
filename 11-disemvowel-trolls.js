function disemvowel(str) {
  let noVowelWord = "", i;
  for (i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) continue;
    noVowelWord += str[i];
  }
  return noVowelWord;
}