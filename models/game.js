const Schema = require('mongoose').Schema;
const db = require('../config/db');

const gameSchema = new Schema(
    {
        name: String,
        version: String,
        rule: String,
        goal: String,
    },
    { timestamps: true }
);
const Game = db.model('Game', gameSchema);

module.exports = Game;
