
import { expect } from '@playwright/test';

// 1. Assert text
export async function assertText(locator, expected) {
    await expect(locator).toHaveText(expected);
}

// 2. Assert URL
export async function assertUrl(page, value) {
    await expect(page).toHaveURL(new RegExp(value));
}

// 3. Assert element is visible
export async function assertVisibleLocator(locator) {
    await expect(locator).toBeVisible();
}
