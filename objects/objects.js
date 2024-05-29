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

// person.lastName = "Ahmed";
// person["lastName"] = "Ahmed";

delete person.deleteMe;
delete person["deleteMe"]; // 

console.log(person.toString());
// console.log();
// console.log(person);

for(const p in person){
    console.log(person[p])
}

console.log(Object.keys(person))
console.log(Object.values(person))
