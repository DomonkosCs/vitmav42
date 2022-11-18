/**
 * Checks if res.locals.games is undefined or not
 * If undefined, redirects to /game/new
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        // somehow games are not found or there are no games yet
        if (
            typeof res.locals.games === 'undefined' ||
            !res.locals.games.length
        ) {
            return res.redirect('/game/new');
        }

        const oldestGameId = res.locals.games[0].id;
        return res.redirect(`/games/${oldestGameId}`);
    };
};
