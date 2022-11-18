/**
 * Removes a game from the database, the entity used here is: res.locals.game
 * Redirects to / after delete
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.game === 'undefined') {
            return next();
        }

        res.locals.game.remove((err) => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};
