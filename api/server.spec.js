const server = require('./server.js');
const request = require('supertest');

describe('GET /', () => {
    it('has process.env.DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    it('works and returns correct response', () => {
        return request(server).get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect('Content-Length', '36')
        .then(res => {
            expect(res.body.message).toBe("It's Working! PAWS UP!")
        })
    });
});