/**
 * Removes a user from the database, the entity used here is: res.locals.user
 * Redirects to /game/:gameid after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
