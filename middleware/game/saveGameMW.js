/**
 * Using POST params update or save a game to the database
 * If res.locals.game is there, it's an update otherwise this middleware creates an entity
 * Redirects to /game/:gameid, where :gameid is from the newly created game
 * If any of the form fields are empty, the page is reloaded.
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const GameModel = objectrepository.GameModel;

        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.version === 'undefined' ||
            typeof req.body.rule === 'undefined' ||
            typeof req.body.goal === 'undefined' ||
            req.body.name === '' ||
            req.body.version === '' ||
            req.body.rule === '' ||
            req.body.goal === ''
        ) {
            return next();
        }

        const semVerRegex = new RegExp('^(0|[1-9]d*).(0|[1-9]d*).(0|[1-9]d*)'); // X.Y.Z format
        if (!semVerRegex.test(req.body.version)) {
            return next(
                new Error(
                    'Error! The valid format of the version is NUMBER.NUMBER.NUMBER'
                )
            );
        }

        if (typeof res.locals.game === 'undefined') {
            res.locals.game = new GameModel();
        }

        res.locals.game.name = req.body.name;
        res.locals.game.version = req.body.version;
        res.locals.game.rule = req.body.rule;
        res.locals.game.goal = req.body.goal;

        return res.locals.game.save((err) => {
            if (err) {
                return next(err);
            }
            return res.redirect(`/games/${res.locals.game.id}`);
        });
    };
};
