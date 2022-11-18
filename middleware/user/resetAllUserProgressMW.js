/**
 * Only runs if the MAJOR version of the game has changed
 * By using POST, resets the progress for all of the users belonging to res.locals.game
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const old_version = res.locals.game.version;
        const new_version = req.body.version;

        // do not run for GET
        if (typeof new_version === 'undefined') {
            return next();
        }

        const old_major_version = old_version.split('.')[0];
        const new_major_version = new_version.split('.')[0];

        if (old_major_version !== new_major_version) {
            res.locals.users.forEach((user) => {
                user.progress = 0;
                user.save();
            });
        }
        return next();
    };
};
