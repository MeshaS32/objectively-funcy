// Your code here.

/*
getfirstName
parameters: person object

// person = {
//   firstName: string
//   lastName: stirng
  
//   return firstName
// }
// */

// //getter function- gets a value from an object
function getFirstName(person){

  return person.firstName
}
console.log(getFirstName({firstName: 'Colin', lastName: 'Jaffe'})) // -> 'Colin')

function getLastName(person){

  return person.lastName
}
console.log(getLastName({firstName: 'Colin', lastName: 'Jaffe'}))

function getFullName(person){
  return person.firstName + " " + person.lastName
}

console.log(getFullName({firstName: 'Colin', lastName: 'Jaffe'})) 

let person1 = {
  firstName: 'Mesha', lastName: 'Hamilton', age: 32
}

let person2 = {
  firstName: "Trey", lastName: "Hamilton", 
}

function setFirstName(person1, newFirstName){
  person1.firstName = newFirstName

  }

  setFirstName(person1, 'Kamesha');
  console.log(person1)

  function setAge(person1, age){
person1.age = age
  }

  setAge(person1, '33');
  console.log(person1)

  function giveBirthday(person){
    if(person1.age === undefined){
      person1.age = 1;
    } else if(person1.age !== undefined){
      person1.age += 1;
    }
  }

  giveBirthday(person1)
  giveBirthday(person2)
  console.log(person1)
  console.log(person2)

  wife = {
    firstName: "Kamesha",
    Lastname: "Sylvester",
    married: true
  }

  husband = {
    firstName: "Trey",
    Lastname: "Hamilton",
    married: true
  }

  function marry(husband, wife){
    if(husband.married === false && wife.married === false)
    husband.married = true;
    wife.married = true;
    husband = wife.firstName + " " + wife.lastName  
    wife = husband.firstName + " " + husband.lastName
  
  }
  marry(husband,wife)
  console.log(husband)
  console.log(wife)

  function divorce(husband, wife){
    if(husband.married === true && wife.married === true)
    husband.married = false;
    wife.married = false;
  
  
  }
  divorce(husband,wife)
  console.log(husband)
  console.log(wife)







  





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
