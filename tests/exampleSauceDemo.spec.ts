import { test, expect } from "playwright/test";
import { LoginPage } from "./pageObjects/LoginPage";
import { ProductsPage } from "./pageObjects/ProductsPage";
import { CartPage } from "./pageObjects/CartPage";
import { CheckoutOnePage } from "./pageObjects/CheckoutOnePage";
import { CheckoutTwoPage } from "./pageObjects/CheckoutTwoPage";
import { CheckoutCompletePage } from "./pageObjects/CheckoutCompletePage";

test("Login", async ({ page }) => {
  await page.goto("https://saucedemo.com")
  await expect(page).toHaveTitle("Swag Labs")

  const login = new LoginPage(page)
  await login.loginWithCredentials("standard_user", "secret_sauce")

  const products = new ProductsPage(page)
  products.checkLogo()


  await page.screenshot({ path: "screenshot/login.png", fullPage: true });
  //await page.pause()
});

test("Purchase an item", async ({ page }) => {
  await page.goto("https://saucedemo.com");
  await expect(page).toHaveTitle("Swag Labs");

  const login = new LoginPage(page);
  await login.loginWithCredentials("standard_user", "secret_sauce");

  const products = new ProductsPage(page)
  await products.checkLogo()
  await products.addToCar()

  const cart = new CartPage(page)
  await cart.checkTitle()
  await cart.clickOnCheckout()
  
  const checkoutOnePage = new CheckoutOnePage(page)
  await checkoutOnePage.checkTitle()
  await checkoutOnePage.fillInformation()
  await checkoutOnePage.clickOnContinue()

  const checkoutTwoPage = new CheckoutTwoPage(page)
  await checkoutTwoPage.checkTitle()
  await checkoutTwoPage.clickOnFinish()

  const checkoutCompletePage = new CheckoutCompletePage(page)
  checkoutCompletePage.checkMessageFinish()

  await page.screenshot({
    path: "screenshot/purchase_an_item.png",
    fullPage: true,
  });
  //await page.screenshot({ path: "screenshot/purchase.png", fullPage: true });
  //await page.pause()
});
