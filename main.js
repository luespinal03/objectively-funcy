// Your code here.


////////////////////////////////////////////////////////////////////////////////
// 1. getFirstName
/* 
getFirstName()

parameters 1 = object 
{
  firstName: string
  lastName: string
}

return firstName
*/

function getFirstName(person) {
  return person.firstName;
}

console.log(getFirstName({
  firstName: 'Colin',
  lastName: 'Jaffe'
})) // -> 'Colin'
console.log(getFirstName({
  firstName: 'Petra',
  lastName: 'Solano'
})) // -> 'Petra'



////////////////////////////////////////////////////////////////////////////////
// 2. getLastName


function getLastName(person) {
  return person.lastName;
}

console.log(getLastName({
  firstName: 'Colin',
  lastName: 'Jaffe'
})) // -> 'Colin'
console.log(getLastName({
  firstName: 'Petra',
  lastName: 'Solano'
})) // -> 'Petra'



////////////////////////////////////////////////////////////////////////////////
// 3. getFullName

function getFullName(person) {
  // return person.fullName; 
  return `${person.firstName} ${person.lastName}`
}

console.log(getFullName({
  firstName: 'Colin',
  lastName: 'Jaffe',
  fullName: 'Colin Jaffe'
})) // -> 'Colin'
console.log(getFullName({
  firstName: 'Petra',
  lastName: 'Solano',
  fullName: 'Petra Solano'
})) // -> 'Petra'

//////////////////////////////////////////////////////////////////////////////
// 4. setFirstName

/* 

parameters: 2
1st parameter
person = {
  firstName: string, 
  lastName: string
}
newFirstName: string

change: firstName of person object to

*/


// Pass by reference, changed the value at the memory location its pointing to
let person1 = {
  firstName: 'Colin',
  lastName: 'Jaffe'
}
let person2 = {
  firstName: 'Petra',
  lastName: 'Solano'
}


function setFirstName(person, newFirstName) {
  // person['firstName'] = newFirstName; 
  person.firstName = newFirstName;
}


setFirstName(person1, 'Redacted');
setFirstName(person2, 'Anthony');

console.log(person1);
console.log(person2);


//////////////////////////////////////////////////////////////////////////////
// 5. setAge

let person3 = {
  firstName: 'Colin',
  lastName: 'Jaffe',
  age: 39
}
let person4 = {
  firstName: 'Petra',
  lastName: 'Solano',
  age: 29
}



function setAge(persons, newAge) {
  persons.age = newAge;
}


setAge(person3, 45);
setAge(person4, 35);

console.log(person3)
console.log(person4)

//////////////////////////////////////////////////////////////////////////////
// 6. giveBirthday


let persona1 = {
  firstName: 'Colin',
  lastName: 'Jaffe',
  age: 39
} // -> {firstName: 'Colin', lastName: 'Jaffe', age: 40}
let persona2 = {
  firstName: 'Petra',
  lastName: 'Solano',
  age: 29
} // -> {firstName: 'Solano', lastName: 'Solano', age: 30}
let persona3 = {
  firstName: 'Baby',
  lastName: 'Jaffe'
} // -> {firstName: 'Baby', lastName: 'Jaffe', age: 1}

function giveBirthday(personas) {
  // personas.age = personas.age + 1;
  // if you are checking to see if an object includes a certain property or not, check if that property is equal to undefined
  // if property is undefined, it does not exist. 
  if (personas.age === undefined) {
    personas.age = 1;
  } else {
    personas.age = personas.age + 1;
  }
}

giveBirthday(persona1);
giveBirthday(persona2);
giveBirthday(persona3);

console.log(persona1)
console.log(persona2)
console.log(persona3)

//////////////////////////////////////////////////////////////////////////////
// 7. marry

const persona4 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
const persona5 = {firstName: 'Petra', lastName: 'Solano', married: false}
marry(person1, person2)


function marry(persona4, persona5){
  persona4.married = true
  persona5.married = true

  persona4.spouseName = `${persona5.firstName} ${persona5.lastName}`
  persona5.spouseName = `${persona4.firstName} ${persona4.lastName}`
}

marry(persona4, persona5);


console.log(persona4)
console.log(persona5)


//////////////////////////////////////////////////////////////////////////////
// 8. divorce 

const banana = {firstName: 'Colin', lastName: 'Jaffe', married: false}
const apple = {firstName: 'Petra', lastName: 'Solano', married: false}


function divorce(banana, apple){
  banana.married = false 
  apple.married = false

  delete banana.spouseName 
  delete apple.spouseName 
}

divorce(banana, apple);


console.log(banana)
console.log(apple)















// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}