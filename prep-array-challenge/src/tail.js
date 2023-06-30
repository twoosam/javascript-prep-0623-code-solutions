/* exported tail */

function tail(arr) {
  const newArr = [];
  let k = 0;
  for (let i = 1; i < arr.length; i++) {
    newArr[k] = arr[i];
    k++;
  }
  return newArr;
}
