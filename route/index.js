const delGameMW = require('../middleware/game/delGameMW');
const getGameMW = require('../middleware/game/getGameMW');
const getGamesMW = require('../middleware/game/getGamesMW');
const resetAllUserProgressMW = require('../middleware/user/resetAllUserProgressMW');
const saveGameMW = require('../middleware/game/saveGameMW');
const delUserMW = require('../middleware/user/delUserMW');
const getUserMW = require('../middleware/user/getUserMW');
const getUsersMW = require('../middleware/user/getUsersMW');
const saveUserMW = require('../middleware/user/saveUserMW');
const renderMW = require('../middleware/renderMW');
const checkRedirectMW = require('../middleware/checkRedirectMW');

const GameModel = require('../models/game');
const UserModel = require('../models/user');
module.exports = function (app) {
    const objRepo = {
        GameModel,
        UserModel,
    };

    app.get('/', getGamesMW(objRepo), checkRedirectMW(objRepo));
    app.get(
        '/games/:gameid',
        getGamesMW(objRepo),
        getGameMW(objRepo),
        getUsersMW(objRepo),
        renderMW(objRepo, 'game')
    );
    app.use('/game/new', saveGameMW(objRepo), renderMW(objRepo, 'gameeditnew'));
    app.use(
        '/game/edit/:gameid',
        getGameMW(objRepo),
        resetAllUserProgressMW(objRepo),
        saveGameMW(objRepo),
        renderMW(objRepo, 'gameeditnew')
    );
    app.get('/game/del/:gameid', getGameMW(objRepo), delGameMW(objRepo));
    app.use(
        '/user/:gameid/new',
        getGameMW(objRepo),
        getUserMW(objRepo),
        saveUserMW(objRepo),
        renderMW(objRepo, 'usereditnew')
    );
    app.use(
        '/user/:gameid/edit/:userid',
        getGameMW(objRepo),
        getUserMW(objRepo),
        saveUserMW(objRepo),
        renderMW(objRepo, 'usereditnew')
    );
    app.get(
        '/user/:gameid/del/:userid',
        getUserMW(objRepo),
        delUserMW(objRepo)
    );
};
