function whileLoop1() {
  var Array = [];
  let i = 0;
  while (i < 10) {
    Array.push(i);
    i++;
  }
  return Array;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  var Array = [];
  let i = 0;
  while (i <= 18) {
    Array.push(i);
    i += 2;
  }
  return Array;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  var Array = [];
  for (let i = 0; i < 10; i++) {
    Array.push(i);
  }
  return Array;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  var Array = [];
  for (let i = 100; i >= 0; i--) {
    Array.push('Time till explosion' + ' ' + i);
  }
  return '' + Array;
}
console.log(forLoop2());

function forInLoop1() {
  var Array = [];
  const object = {
    name: 'Tim Woo-Sam',
    age: '22',
    hobby: 'Soccer',
    invention: 'Oreo and brownie cookies',
  };
  for (const property in object) {
    Array.push(property);
  }
  return Array;
}
console.log('forInLoop1 output', forInLoop1());

function forInLoop2(object) {
  var Array = [];
  object = {
    name: 'Tim Woo-Sam',
    age: '22',
    hobby: 'Soccer',
    invention: 'Oreo brookies',
  };
  for (const property in object) {
    Array.push(object[property]);
  }
  return Array;
}
console.log('forInLoop2 output', forInLoop2());
