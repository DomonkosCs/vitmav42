const expect = require('chai').expect;
const checkRedirectMW = require('../../../middleware/checkRedirectMW');

describe('checkRedirectMW middleware ', () => {
    describe('redirects to /game/new when', () => {
        it('games does not exist on res.locals', () => {
            const res = {
                locals: {},
                redirect: (path) => path,
            };
            const redirectPath = checkRedirectMW()({}, res, {});
            expect(redirectPath).to.eql('/game/new');
        });
        it('games has a length of 0', () => {
            const res = {
                locals: {
                    games: [],
                },
                redirect: (path) => path,
            };
            const redirectPath = checkRedirectMW()({}, res, {});
            expect(redirectPath).to.eql('/game/new');
        });
    });
    it('redirects to the ID of the game at the 0th position', () => {
        const res = {
            locals: {
                games: [{ id: 3 }, { id: 8 }],
            },
            redirect: (path) => path,
        };
        const redirectPath = checkRedirectMW()({}, res, {});
        expect(redirectPath).to.eql('/games/3');
    });
});
