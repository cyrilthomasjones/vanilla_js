// Callbacks
// A function passed as an arguement to another function is called Callbacks

const greetUser = (username, callback) => {

    if(callback){
        console.log(callback(username));
    }else{
        console.log(username);
    }
   
}

// calling the function 
// greetUser("james", (username) => {
//     return "Hello "+ username;
// });

const cb = username => {
    return "Hello "+ username;
}
// greetUser("james", cb);

// Inline implementation of callback implementation
greetUser("james", (U) => {
    return "Hello "+ U;
});

greetUser("Jamila");