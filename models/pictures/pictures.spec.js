const db = require('../../data/dbConfig');

describe('pictures model', () => {
    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

});