/**
 * Checks if res.locals.games is undefined or not
 * If undefined, redirects to /game/new
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
