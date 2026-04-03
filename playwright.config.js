const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: false,
    storageState: 'auth.json',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
