/**
 * Loads all users from the database
 * The result is saved to res.locals.gameusers
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const UserModel = objectrepository.UserModel;

        if (typeof res.locals.game === 'undefined') {
            return next();
        }

        UserModel.find({ _game: res.locals.game.id }, (err, users) => {
            if (err) {
                return next(err);
            }

            res.locals.users = users;
            return next();
        });
    };
};
