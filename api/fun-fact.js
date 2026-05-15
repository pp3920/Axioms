

const axios = require("axios");
const funfact = axios.create({
    baseURL: "https://uselessfacts.jsph.pl/api/v2/facts/random",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },

});

module.exports = funfact;
