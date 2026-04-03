const { test, expect } = require('@playwright/test');
const AutomationPage = require('../../pages/automationPage');

test('form upload flow', async ({ page }) => {
  const app = new AutomationPage(page);

  await page.goto('https://automationanywhere.com');

  await app.openAutomation();
  await app.createForm();

  const inputText = 'automation test';

  await page.fill('input[type="text"]', inputText);
  await expect(page.locator('input[type="text"]')).toHaveValue(inputText);

  await page.setInputFiles('input[type="file"]', 'test.pdf');
  await expect(page.locator('input[type="file"]')).toBeVisible();

  await app.save();
  await expect(page.locator('text=Save')).toBeVisible();
});
