/* exported initial */

function initial(arr) {
  const newArr = [];
  let k = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    newArr[k] = arr[i];
    k++;
  }
  return newArr;
}
