/**
 * Removes a game from the database, the entity used here is: res.locals.game
 * Redirects to / after delete
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
