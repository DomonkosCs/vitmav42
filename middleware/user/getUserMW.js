/**
 * Loads a user from the database using the :userid param
 * The result is saved to res.locals.gameuser
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const UserModel = objectrepository.UserModel;
        UserModel.findOne({ _id: req.params.userid }, (err, user) => {
            if (err || !user) {
                return next(err);
            }

            res.locals.user = user;
            return next();
        });
    };
};
