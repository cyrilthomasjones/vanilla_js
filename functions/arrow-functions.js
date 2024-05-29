// Arrow Function (Here we are using arrow function instead of function keyword)

// const getBrand = function(brand) {
//     return {
//         brand: brand,
//         website: `www.${brand}.com`
//     }
// }

const getBrand = brand => ({
        brand: brand,
        website: `www.${brand.toLowerCase()}.com` 
    }
)

const brand = getBrand("Nike")
console.log(JSON.stringify(brand,null,1))

// function add(a,b) {
//     return a + b;
// }


// Note I cannot remove the parenthesis becos there is more than one arguement
// Also, I don't need curly braces becos I am not returning an object and 
// I am not doing complex business logic 
// Also, I can do this (a + b) if I want to
const add = (a,b) => a + b; 

const calculate = (a, b, sign) => {
    switch(sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        default:
            // throw error
    }
}