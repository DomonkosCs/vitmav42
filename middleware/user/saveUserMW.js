/**
 * Using POST params update or save a user to the database
 * If res.locals.user is there, it's an update otherwise this middleware creates an entity.
 * Redirects to /game/:gameid after success
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const UserModel = objectrepository.UserModel;

        if (
            typeof req.body.username === 'undefined' ||
            typeof req.body.progress === 'undefined' ||
            req.body.username === '' ||
            req.body.progress === ''
        ) {
            return next();
        }

        if (typeof res.locals.user === 'undefined') {
            res.locals.user = new UserModel();
        }

        if (
            Number.isNaN(parseInt(req.body.progress, 10)) ||
            req.body.progress < 0 ||
            req.body.progress > 1
        ) {
            return next(
                new Error(
                    'Error! User progress is not a number, or not between 0 and 1.'
                )
            );
        }
        res.locals.user.username = req.body.username;
        res.locals.user.progress = req.body.progress;
        res.locals.user._game = res.locals.game.id;

        return res.locals.user.save((err) => {
            if (err) {
                return next(err);
            }
            res.redirect(`/games/${res.locals.game.id}`);
        });
    };
};
