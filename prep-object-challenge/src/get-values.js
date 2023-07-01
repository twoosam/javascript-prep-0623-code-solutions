/* exported getValues */

function getValues(object) {
  const arr = [];
  for (const key in object) {
    arr.push(object[key]);
  }
  return arr;
}
