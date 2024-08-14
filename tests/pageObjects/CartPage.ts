import { expect, Locator, Page } from "@playwright/test";

export class CartPage {
  private readonly title: Locator;
  private readonly buttonCheckout: Locator;

  constructor(page: Page) {
    this.title = page.locator('//span[@class="title" and contains(text(), "Your Cart")]');
    this.buttonCheckout = page.getByRole("button", { name: "Checkout" });
  }

  async checkTitle() {
    await expect(this.title).toBeVisible();
  }

  async clickOnCheckout() {
    await this.buttonCheckout.click();
  }
}
