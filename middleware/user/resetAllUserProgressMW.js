/**
 * Loads all users from the database belonging to res.locals.game
 * Only runs if the MAJOR version of the game has changed
 * By using POST, resets the progress for all of the users
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
