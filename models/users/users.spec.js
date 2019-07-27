const db = require('../../data/dbConfig');

const { createUser } = require('./users');

describe('users model', () => {
    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    // beforeEach(async () => {
    //     await db('users').truncate();
    // })

    // describe('createUser()', () => {
    //     it('insert a new user into the db', async () => {
    //        await createUser({ name: 'Jim Bob'})

    //        const users = await db('users');

    //        expect(users).toHaveLength(1);
    //     })

    // })

});
