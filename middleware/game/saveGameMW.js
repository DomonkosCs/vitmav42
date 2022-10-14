/**
 * Using POST params update or save a game to the database
 * If res.locals.game is there, it's an update otherwise this middleware creates an entity
 * Redirects to /game/:gameid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
