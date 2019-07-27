const db = require('../../data/dbConfig');

describe('shelter_subscriptions model', () => {
    it('should set environent to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

});