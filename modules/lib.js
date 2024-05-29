// const BRAND = "Cyrilsoft"; // This could be an object as seen below

// This could be an object, a function, a variable anything you want to export 
const BRAND = {
    brand: "Cyrilsoft ",
    website: "cyrilsoft.com"
}

// export const add = (a,b) => a + b; //NAME EXPORT Here, we are exporting a function
// export const subtract = (a,b) => a - b //NAME EXPORT

const add = (a,b) => a + b; //NAME EXPORT Here, we are exporting a function
const subtract = (a,b) => a - b; //NAME EXPORT

export {
    add,
    subtract,
    BRAND as brand,
    BRAND
}


// DEFAULT EXPORTS. Note we can have only one DEFAULT export but many name export
export default BRAND;

