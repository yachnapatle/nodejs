# get-a-joke

# a Random Joke Generator

A simple npm package that fetches a random joke from an external API.

## Installation

To use this package in your project, you can install it using npm:

```bash
npm install get-a-joke
```

# Usage

In your code, you can import the getRandomJoke function and use it to get a random joke:

# example :

```js
        const getRandomJoke = require('get-a-joke');

        getRandomJoke()
          .then(joke => console.log(joke))
          .catch(error => console.error(error.message));

        The getRandomJoke function returns a Promise that resolves to a string containing a random joke. If an error occurs, the Promise is rejected with an error message.
```

# API :

getRandomJoke()
Returns: Promise<string> - A Promise that resolves to a string containing a random joke.

# Dependencies :

axios: Used to make HTTP requests to fetch jokes from the Official Joke API.

# Contributing :

If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request on the GitHub repository [pull from](https://github.com/manikerisaurabh/get-a-joke)

# License :

This project is licensed under the ISC License.
