import { expect } from "@playwright/test";
export async function validateordernumberRegex(locator){


    await expect(locator).toHaveText(/Order number :\s*\d+/);
}