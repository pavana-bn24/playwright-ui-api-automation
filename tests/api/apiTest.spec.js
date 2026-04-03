const { test, expect } = require('@playwright/test');

test('api validation', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('title');
  expect(data.id).toBe(1);
});
