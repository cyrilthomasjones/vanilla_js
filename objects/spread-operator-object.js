// You can have function within an object.
// As you can see, we have a toString() function in this object

const jamilia = {
    firstName: "Jamila",
    age: 21, 
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),

    toString: function() {
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe: true, 
};

const address = {
    city:"London",
    postCode:"SW9"
}

// Spread Operator

// const person = {
//     firstName: jamilia.firstName,
//     address: {
//         city: address.city,
//         postCode: address.postCode,
//     }
// };


// If you want to spread every single properties and values into this object called person. 
// To do so simply type "..." 
const person = {
    ...jamilia,
    // ...address // Below, we combine jamila and address into a "person" object.
    address: {...address} // Here we are displaying address as a separate object using spread operator
};

console.log(person)