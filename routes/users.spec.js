const supertest = require('supertest');
const router = require('./users');

describe('users router', () => {

    describe('GET /', () => {
        it('responds with 200 OK', () => {
            supertest(router).get('/')
            .expect(200)
            .expect('COntent-Type', /json/i)
        });
    });

});