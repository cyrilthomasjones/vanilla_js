// import axios, {isCancel, AxiosError} from 'axios';

//  axios : is a Promise based HTTP client for the browser and node.js

import axios from 'axios'

// axios.get("https://api.chucknorris.io/jokes/random")
//     .then(res => {
//         console.log(res.data)
//     }).catch(err => {
//         console.log(err)
//     })



// lastly, covert this in to async-await 

const fetchJoke = async (url) => {

    try {
        const res = await axios.get(url)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

fetchJoke("https://api.chucknorris.io/jokes/random")