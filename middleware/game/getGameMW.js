/**
 * Load a game from the database using the :gameid param
 * The result is saved to res.locals.game
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const GameModel = objectrepository.GameModel;
        GameModel.findOne({ _id: req.params.gameid }, (err, game) => {
            if (err || !game) {
                return next(err);
            }

            res.locals.game = game;
            return next();
        });
    };
};
