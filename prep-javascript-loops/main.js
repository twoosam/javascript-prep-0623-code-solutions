function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const array = [];
  let i = 0;
  while (i <= 18) {
    array.push(i);
    i += 2;
  }
  return array;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  const array = [];
  for (let i = 100; i >= 0; i--) {
    array.push('Time till explosion' + ' ' + i);
  }
  return '' + array;
}
console.log(forLoop2());

function forInLoop1() {
  const array = [];
  const object = {
    name: 'Tim Woo-Sam',
    age: '22',
    hobby: 'Soccer',
    invention: 'Oreo and brownie cookies',
  };
  for (const property in object) {
    array.push(property);
  }
  return array;
}
console.log('forInLoop1 output', forInLoop1());

function forInLoop2(object) {
  const array = [];
  object = {
    name: 'Tim Woo-Sam',
    age: '22',
    hobby: 'Soccer',
    invention: 'Oreo brookies',
  };
  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}
console.log('forInLoop2 output', forInLoop2());
