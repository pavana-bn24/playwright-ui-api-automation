const { test, expect } = require('@playwright/test');
const AutomationPage = require('../../pages/automationPage');

test('create message box task', async ({ page }) => {
  const app = new AutomationPage(page);

  await page.goto('https://automationanywhere.com');

  await app.openAutomation();
  await expect(page).toHaveURL(/automation/);

  await app.createTaskBot();
  await expect(page.locator('text=Task Bot')).toBeVisible();

  await app.save();
  await expect(page.locator('text=Save')).toBeVisible();
});
