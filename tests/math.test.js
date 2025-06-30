import { sum, subtract } from '../src/utils/math';
import request from 'supertest';
import app from '../src/app.js'; 

test('sum 2 + 2 = 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('subtract 5 - 3 = 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('sum with negative', () => {
  expect(sum(-1, -1)).toBe(-2);
});

test('Flujo completo de suma y resta', async () => {
  const sumRes = await request(app).get('/api/sum?a=10&b=5');
  const subRes = await request(app).get('/api/subtract?a=10&b=5');

  expect(sumRes.body.result).toBe(15);
  expect(subRes.body.result).toBe(5);
});