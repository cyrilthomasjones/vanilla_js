// Arrays Destructuring
// We can also use destructuring when working with arrays
const names = [
    "James",
    "Mariam",
    "Jamal",
    "Aisha"
];

// const james = names[0];
// const mariam = names[1];
// const jamal = names[2]


const [j, mariam, jamal, ...rest] = names //"... with anything" helps to get the remainder index 

console.log(j)
console.log(mariam)
console.log(jamal)