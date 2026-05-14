

const axios = require("axios");
const apiClient = axios.create({
    baseUrl: "https://uselessfacts.jsph.pl/api/v2/facts/random",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },

});

module.exports = apiClient;
