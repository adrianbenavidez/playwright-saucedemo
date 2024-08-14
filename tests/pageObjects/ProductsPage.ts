import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
  private readonly logo: Locator
  private readonly addToCartButton: Locator
  private readonly linkCart: Locator

  constructor(page: Page) {
    this.logo = page.locator('//div[@class="app_logo" and contains(text(),"Swag")]')
    this.addToCartButton = page.getByRole("button", { name: "Add to cart" })
    this.linkCart = page.locator('//a[@class="shopping_cart_link"]')
  }

  async checkLogo() {
    await expect(this.logo).toBeVisible()
  }

  async clickOnAddToCart(){
    await this.addToCartButton.first().click()
  }

  async accessToCart(){
    await this.linkCart.click()
  }

  async addToCar(){
    this.clickOnAddToCart()
    this.accessToCart()
  }


}
