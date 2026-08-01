import { test, expect } from '@playwright/test';

test('title 1', async ({ page }) => {
  await page.goto('https://playwright.dev/');

});

test('title 2', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

})

test('title 3', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

})

test('title 4', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

})

test('title 5', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

})