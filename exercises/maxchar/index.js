// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (char of str) {
    charMap[char] = charMap[char] ? charMap[char]++ : 1;
  }

  Object.keys(charMap).forEach(char => {
    if (charMap[char] > max) {
      max = charMap[char]; //The value
      maxChar = char; //The key
    }
  });

  return maxChar;
}

module.exports = maxChar;
