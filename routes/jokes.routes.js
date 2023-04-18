const express = require('express');
const app = express.Router();

const JokeController = require('../controllers/jokes.controller.js');

module.exports = (app) => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
    app.get('/api/jokes/random', JokeController.getRandomJoke);
};

// const express = require('express');
// const JokeController = require('../controllers/jokes.controller.js');

// const router = express.Router();

// router.get('/api/jokes', JokeController.findAllJokes);
// router.get('/api/jokes/:id', JokeController.findOneSingleJoke);
// router.patch('/api/jokes/:id', JokeController.updateExistingJoke);
// router.post('/api/jokes', JokeController.createNewJoke);
// router.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
// router.get('/api/jokes/random', JokeController.getRandomJoke);

// module.exports = router;
