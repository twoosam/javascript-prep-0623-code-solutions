const person = {
  firstName: 'Tim',
  lastName: 'Woo-Sam',
  hobby: 'Playing soccer',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Student';
console.log("The person's cuurent job is:", person.job);

person['previousJob'] = 'Golf course';
console.log("The person's previous job is:", person['previousJob']);

console.log('The complete person object:', person);
