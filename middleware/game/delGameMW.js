/**
 * Removes a game from the database, the entity used here is: res.locals.game
 * Redirects to / after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
