const expect = require('chai').expect;
const resetAllUserProgressMW = require('../../../../middleware/user/resetAllUserProgressMW');

describe('resetAllUserProgress middleware ', () => {
    describe('should call next when', () => {
        it('new_version does not exists on req.body', (done) => {
            const req = {
                body: {},
            };
            const res = {
                locals: {
                    game: {
                        version: '1.2.0',
                    },
                },
            };
            resetAllUserProgressMW()(req, res, (err) => {
                expect(err).to.eql(undefined);
                done();
            });
        });
        it('new_major_version equals to old_major_version', (done) => {
            const req = {
                body: { version: '1.3.4' },
            };
            const res = {
                locals: {
                    game: {
                        version: '1.2.0',
                    },
                },
            };
            resetAllUserProgressMW()(req, res, (err) => {
                expect(err).to.eql(undefined);
                done();
            });
        });
    });
    describe('should change all user progress to 0 and call next when', function () {
        it('new_major_version does not equal to old_major_version', function (done) {
            const req = {
                body: { version: '2.3.4' },
            };
            const res = {
                locals: {
                    game: {
                        version: '1.2.0',
                    },
                    users: [
                        { progress: 1, save: () => {} },
                        { progress: 0.5, save: () => {} },
                    ],
                },
            };
            resetAllUserProgressMW()(req, res, (err) => {
                expect(err).to.eql(undefined);
                expect(res.locals.users[0].progress).to.eql(0);
                expect(res.locals.users[1].progress).to.eql(0);
                done();
            });
        });
    });
});
