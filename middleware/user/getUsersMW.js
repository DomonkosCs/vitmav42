/**
 * Loads all users from the database
 * The result is saved to res.locals.gameusers
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
