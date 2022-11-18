/**
 * Load all games from the database
 * and sorts them from oldest created to newest
 * The result is saved to res.locals.games
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const GameModel = objectrepository.GameModel;
        GameModel.find({})
            .sort({ createdAt: 'asc' })
            .exec((err, games) => {
                if (err) {
                    return next(err);
                }

                res.locals.games = games;
                return next();
            });
    };
};
