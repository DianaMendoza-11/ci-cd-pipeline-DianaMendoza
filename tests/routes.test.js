import request from 'supertest';
import app from '../src/app';

test('GET /ping', async () => {
  const res = await request(app).get('/api/ping');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('pong');
});

test('GET /sum?a=2&b=3', async () => {
  const res = await request(app).get('/api/sum?a=2&b=3');
  expect(res.body.result).toBe(5);
});
