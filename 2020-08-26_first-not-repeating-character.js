/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
first_not_repeating_character(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
first_not_repeating_character(s) = '_'.

There are no characters in this string that do not repeat.

[execution time limit] 4 seconds (js)

[input] string s

A string that contains only lowercase English letters.

[output] char

The first non-repeating character in s of '_' if there are no characters that do not repeat.
*/

function first_not_repeating_character(s) {
  // create dataset object
  const dataset = {};

  // add all chars to object/dictionary (char: count)
  // loop through string
  for (char of s) {
    // if char is in dataset
    if (char in dataset) {
      // add its count
      dataset[char] += 1;
    } else {
      // add char to dataset with count 1
      dataset[char] = 1;
    }
  }

  // look for first char that has count 1 and return it
  for (char of s) {
    if (dataset[char] === 1) {
      return char;
    }
  }

  // if did not find any char with count of 1, return '_'
  return "_";
}
