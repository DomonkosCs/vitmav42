const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
    username: String,
    progress: Number,
    _game: {
        type: Schema.Types.ObjectId,
        ref: 'Game',
    },
});

module.exports = User;
