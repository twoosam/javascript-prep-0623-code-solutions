const number1 = 4;
const number2 = 9;
const product = number1 * number2;
console.log('value of product:', product);
console.log('typeof product:', typeof product);

const charge = 9;
const payment = 4;
const amountRemaining = charge - payment;
console.log('value of amountRemaining:', amountRemaining);
console.log('typeof amountRemaining:', typeof amountRemaining);

const tests = 85;
const assignments = 95;
const final = 80;
const grade = (tests + assignments + final) / 3;
console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName = 'Tim ';
const lastName = 'Woo-Sam';
const fullName = `${firstName}${lastName}`;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH = 3;
const isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const numberOfSoldiers = 100;
const isSparta = numberOfSoldiers === 300;
console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let nickname = fullName;
nickname = nickname += ' is the GOAT';
console.log('value of nickname:', nickname);
console.log('typeof nickname:', typeof nickname);
