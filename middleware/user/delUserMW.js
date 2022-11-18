/**
 * Removes a user from the database, the entity used here is: res.locals.user
 * Redirects to /game/:gameid after delete
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.user === 'undefined') {
            return next();
        }

        res.locals.user.remove((err) => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/games/${res.locals.game.id}`);
        });
    };
};
