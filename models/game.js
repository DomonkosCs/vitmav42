const db = require('../config/db');

const Game = db.model('Game', {
    name: String,
    version: String,
    rule: String,
    goal: String,
});

module.exports = Game;
