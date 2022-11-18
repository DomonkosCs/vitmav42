const delGameMW = require('../middleware/game/delGameMW');
const getGameMW = require('../middleware/game/getGameMW');
const getGamesMW = require('../middleware/game/getGamesMW');
const sortGamesMW = require('../middleware/game/sortGamesMW');
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

    // const game = new GameModel();
    // game.name = 'Third Game';
    // console.log(game);
    // game.save((err) => {
    //     console.log(err);
    // });

    app.get(
        '/',
        getGamesMW(objRepo),
        sortGamesMW(objRepo),
        checkRedirectMW(objRepo)
        // renderMW(objRepo, 'game')
    );
    app.get(
        '/games/:gameid',
        getGamesMW(objRepo),
        getGameMW(objRepo),
        getUsersMW(objRepo),
        renderMW(objRepo, 'game')
    );
    app.use(
        '/game/new',
        getGameMW(objRepo),
        saveGameMW(objRepo),
        renderMW(objRepo, 'gameeditnew')
    );
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
        '/user/:game/edit/:userid',
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
