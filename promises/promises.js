// Promises

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data back from the server")
    }, 3000)

    setTimeout(() => {
        reject("failed to get data from server")
    }, 2000)
});

promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log("done")
})