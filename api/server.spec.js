const server = require('./server.js');
const request = require('supertest');

describe('GET /', () => {
    it('has process.env.DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });

    it('works and returns correct response', () => {
        return request(server).get('/')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect('Content-Length', '22')
        // .then(res => {
        //     expect(res.body).toBe("It's Working! PAWS UP!")
        // })
    });
});