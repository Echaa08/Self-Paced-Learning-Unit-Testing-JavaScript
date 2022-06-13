process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app.js');
const config = require('../knexfile.js')[process.env.NODE_ENV];
const db = require('knex')(config);

const { getItems } = require('../models.js');

beforeEach(async (done) => {
    await db.migrate.rollback(config);
    await db.migrate.latest();
    await db.seed.run();
    done();
});

afterEach(async () => {
    await db.migrate.rollback(config);
});

test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.type).toEqual('text/html');
});

test('Get items', async () => {
    const items = getItems();
    expect(items[0].title).toBe('Spacex Dragon');
    expect(items.length).toBe(3);
});