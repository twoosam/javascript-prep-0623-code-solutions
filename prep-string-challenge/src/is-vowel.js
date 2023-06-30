/* exported isVowel */

function isVowel(character) {
  if (
    character === 'a' ||
    character === 'e' ||
    character === 'i' ||
    character === 'o' ||
    character === 'u' ||
    character === 'A' ||
    character === 'E' ||
    character === 'I' ||
    character === 'O' ||
    character === 'U'
  ) {
    return true;
  } else {
    return false;
  }
}
