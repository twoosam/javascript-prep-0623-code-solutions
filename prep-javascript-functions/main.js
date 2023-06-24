function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
const getGreetingResult = getGreeting('World');
console.log('getGreeting exercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const getFullNameResult = getFullName('Tim', 'Woo-Sam');
console.log('getFullName exercise:', getFullNameResult);

function cube(number) {
  return Math.pow(number, 3);
}
const cubeResult = cube(5);
console.log('cube exercise:', cubeResult);
