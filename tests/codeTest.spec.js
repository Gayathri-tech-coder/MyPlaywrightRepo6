import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.leafground.com/input.xhtml');
  await page.getByRole('textbox', { name: 'Babu Manickam' }).click();
  await page.getByRole('textbox', { name: 'Babu Manickam' }).fill('John');
  await page.getByRole('textbox', { name: 'Babu Manickam' }).press('Tab');
  await page.locator('input[name="j_idt88:j_idt91"]').fill('');
  await page.locator('input[name="j_idt88:j_idt91"]').press('Tab');
  await page.locator('input[name="j_idt88:j_idt95"]').press('Tab');
});