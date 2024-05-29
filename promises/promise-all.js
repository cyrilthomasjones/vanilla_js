
const customers = new Promise((resolve, reject) => {
    return Promise.resolve().then(() => {
        let i = 0;
        while(i < 2_000_000_000) i++
        resolve([
            {name: 'Jamila', id: 1},
            {name: 'Bob', id: 2}
        ])
    })
});

const addresses = new Promise((resolve,reject) => {
    return Promise.resolve().then(() => {
        // reject("oops error")
        let i = 0;
        while(i < 2_000_000_000) i++
        resolve([
            {custormerId: 1, address: " London"},
            {custormerId: 2, address: " London"}
        ])
    })
})

// const fetchData = () => {
//     customers.then (c => {
//         addresses.then(a => {
//             console.log(c)
//             console.log(a)
//         }).catch(err => {
//             console.log(err)
//         })
//     }).catch(err => {
//         console.log(err)
//     })
// }

// const fetchData = async() => {
//     // try{
//     // const c = await customers;
//     // const a = await addresses;
//     // console.log(c)
//     // console.log(a)
//     // } catch (error) {
//     //     console.log(error);
//     // }

//     /*promise.all takes an array of promises 
//     and it returns an array of results for each of the 
//     promises that you passed in. */

//     Promise.all([customers, addresses]).then(values => {
//         // console.log(values)
//         const [c,a] = values;
//         console.log(a)
//         console.log(c)
//     }).catch(err => {
//         console.log(err);
//     })
// }

// const fetchData = async() => {
//     try{
//     const c = await customers;
//     const a = await addresses;
//     } catch (error) {
//         console.log(error);
//     }
// }

const fetchData = async() => {
    try{
    // const c = await customers;
    // const a = await addresses;

    const values = await Promise.all([customers, addresses]);
    const [c,a] = values;
    console.log(c)
    console.log(a)
    } catch (error) {
        console.log(error);
    }
}

fetchData();