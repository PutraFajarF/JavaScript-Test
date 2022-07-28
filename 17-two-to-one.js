// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - 
// each taken only once - coming from s1 or s2.


// Solution 1
function longest(s1, s2) {
  // your code
  let word1 = [...new Set(s1.split(''))];
  let word2 = [...new Set(s2.split(''))];
  for (i = 0; i < word2.length; i++) {
    word1.push(word2[i]);
  }

  let newWord = [...new Set(word1)];
  let result = newWord.sort().join('');

  return result
}



// Solution 2 Simple Version
function longest(s1, s2) {
  // your code
  let result = [...new Set([...s1,...s2])].sort().join('')
  return result
}