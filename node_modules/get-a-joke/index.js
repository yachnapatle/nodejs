
const axios = require('axios');

async function getRandomJoke() {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const { setup, punchline } = response.data;
        return `${setup}\n${punchline}`;
    } catch (error) {
        throw new Error('Failed to fetch a random joke');
    }
}

module.exports = getRandomJoke;
