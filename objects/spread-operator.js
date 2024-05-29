// You can have function within an object.
// As you can see, we have a toString() function in this object

const person = {
    firstName: "Jamila",
    age: 21, 
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    },
    toString: function() {
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe: true, 
};

// const firstName = person.firstName;
// const age = person.age;
// const balance = person.balance

// const { firstName, age, balance} = person;


/************************************************
 * ::::::::OBJECT DISTRUCTURING:::::::
 * Object destructuring in JavaScript is a syntax 
that allows you to extract properties from 
objects and assign them to variables. 
It simplifies the process of working with 
objects by enabling you to directly access 
and use their properties in a concise 
manner.******************************************/

const {  // Spread operator allow us to pull values from objects in one single line. 
    firstName,
    firstName: name, // OBJECT DISTRUCTURING: Note we renamed field name firstName to name and we are not using curly bracket becos this is not an object 
    age, 
    balance,
    address: {city: town} //OBJECT DISTRUCTURING: Note we renamed city to town 
} = person;

console.log(firstName);
console.log(name);
console.log(age);
console.log(balance);
// console.log(city);
console.log(town);


