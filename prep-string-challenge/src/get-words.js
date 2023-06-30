/* exported getWords */

function getWords(string) {
  const newArr = string.split(' ');
  if (string.length === 0) {
    return [];
  } else {
    return newArr;
  }
}
