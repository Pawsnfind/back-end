const db = require('../../data/dbConfig');

describe('shelter_follows model', () => {
    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

});