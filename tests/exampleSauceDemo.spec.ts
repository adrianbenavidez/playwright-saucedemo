import { test, expect } from "playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://saucedemo.com");
  await expect(page).toHaveTitle("Swag Labs");
  await page.locator("input[id='user-name']").fill("standard_user");
  await page.locator("input[id='password']").fill("secret_sauce");
  await page.locator("input[id='login-button']").click();
  await expect(page.locator('//div[@class="app_logo"]')).toBeVisible();
  await page.screenshot({ path: "screenshot/login.png", fullPage: true });
  //await page.pause()
});

test("Purchase an item", async ({ page }) => {
  await page.goto("https://saucedemo.com");
  await expect(page).toHaveTitle("Swag Labs");
  await page.locator("input[id='user-name']").fill("standard_user");
  await page.locator("input[id='password']").fill("secret_sauce");
  await page.locator("input[id='login-button']").click();
  await expect(page.locator('//div[@class="app_logo"]')).toBeVisible();
  await page.getByRole("button", { name: "Add to cart" }).first().click();
  await page.locator('//a[@class="shopping_cart_link"]').click();
  await expect(page.locator('//div[@class="cart_quantity"]')).toBeVisible();

  await page.getByRole("button", { name: "Checkout" }).click();
  await expect(page.locator('span[class="shopping_cart_badge"]')).toBeVisible();

  await page.getByRole("textbox", { name: "First Name" }).fill("Adrian");
  await page.getByRole("textbox", { name: "Last Name" }).fill("Benavidez");
  await page.getByRole("textbox", { name: "Zip/Postal Code" }).fill("5000");

  await page.getByRole("button", { name: "Continue" }).click();


  await expect(page.locator('//div[@class="summary_info"]')).toBeVisible()

  await page.getByRole("button", { name: "Finish" }).click();


  await expect(page.locator('//h2[@class="complete-header"]')).toBeVisible()
  

  await page.screenshot({ path: "screenshot/purchase_an_item.png", fullPage: true });
  //await page.pause()
});
