import { expect, Locator, Page } from "@playwright/test";

export class CheckoutOnePage {
  private readonly title: Locator
  private readonly textboxFirstName: Locator
  private readonly textboxLastName: Locator
  private readonly textboxPostalCode: Locator
  private readonly buttonContinue: Locator

  constructor(page: Page) {
    this.title = page.locator(
      '//span[@class="title" and contains(text(), "Checkout")]'
    );
    this.textboxFirstName = page.getByRole("textbox", { name: "First Name" });
    this.textboxLastName = page.getByRole("textbox", {
      name: "Last Name",
    });
    this.textboxPostalCode = page.getByRole("textbox", {
        name: "Zip/Postal Code",
      });
    this.buttonContinue = page.getByRole("button", { name: "Continue" });
  }

  async checkTitle(){
    await expect(this.title).toBeVisible()
  }

  async fillInformation(){
    await this.textboxFirstName.fill("Adrian")
    await this.textboxLastName.fill("Benavidez")
    await this.textboxPostalCode.fill("5000")
  }

  async clickOnContinue(){
    await this.buttonContinue.click()
  }
  

  //await expect(page.locator('//span[@class="title" and contains(text(), "Checkout")]')).toBeVisible();

  //await page.getByRole("textbox", { name: "First Name" }).fill("Adrian");
  //await page.getByRole("textbox", { name: "Last Name" }).fill("Benavidez");
  //await page.getByRole("textbox", { name: "Zip/Postal Code" }).fill("5000");

  //await page.getByRole("button", { name: "Continue" }).click();
}
