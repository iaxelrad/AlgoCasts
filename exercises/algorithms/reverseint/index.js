// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const numAsString = n.toString();
  const stringAsArray = numAsString.split('');
  const reversedArray = stringAsArray.reverse();
  const reversedString = reversedArray.join('');
  const reversedNum = parseInt(reversedString);
  return reversedNum * Math.sign(n);
}

module.exports = reverseInt;
