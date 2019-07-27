const db = require('../../data/dbConfig');

describe('should set environment to testing', () => {
    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

});