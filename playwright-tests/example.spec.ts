import { test, expect } from '@playwright/test';

test('document has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page).toHaveTitle(
    'Senior front-end developer coding test - Econans'
  );
});

test('page has one h1', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.locator('h1')).toHaveCount(1);
});

test('page has one search-input', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.locator('#search')).toHaveCount(1);
});

test('should display error message when search term is less than 3 characters', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/');

  await page.fill('#search', 'Ba');

  await expect(page.locator('[aria-label="error-message"]')).toBeVisible();
});

test('should not display error message when search term is 3 characters or more', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/');

  await page.fill('#search', 'Bat');

  await expect(page.locator('[aria-label="error-message"]')).not.toBeVisible();
});

test('should allow users to search for movies', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.fill('#search', 'Batman');

  await page.waitForSelector('[aria-label="movie-list-item"]');

  const results = await page
    .locator('[aria-label="movie-list-item"]')
    .allTextContents();
  expect(results).toHaveLength(10);
});

test('should allow users to view details of a movie', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.fill('#search', 'Batman');
  await page.waitForSelector('[aria-label="movie-list-item"]');

  await page
    .locator('[aria-label="movie-list-item"]:has-text("Batman Begins")')
    .click();

  await expect(page).toHaveURL('http://localhost:5173/movies/tt0372784'); // Batman Begins IMDb ID
  await expect(page.locator('h1')).toHaveText('Batman Begins (2005)');
  await expect(page.locator('text=Director: Christopher Nolan')).toBeVisible();
});
