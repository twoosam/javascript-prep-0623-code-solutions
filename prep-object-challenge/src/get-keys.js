/* exported getKeys */

function getKeys(object) {
  const arr = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}
