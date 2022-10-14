/**
 * Load a game from the database using the :gameid param
 * The result is saved to res.locals.game
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
