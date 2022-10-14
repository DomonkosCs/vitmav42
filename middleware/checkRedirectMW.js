/**
 * Checks if res.locals.games is undefined or not
 * If undefined, redirects to /game/new
 */
const requireOption = require('./requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
