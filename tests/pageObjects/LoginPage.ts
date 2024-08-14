import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly userNameTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.userNameTextBox = page.locator("input[id='user-name']");
    this.passwordTextBox = page.locator("input[id='password']");
    this.loginButton = page.locator("input[id='login-button']");
  }

  async fillUserName(userName: string) {
    await this.userNameTextBox.fill(userName);
  }

  async fillPassword(password: string) {
    await this.passwordTextBox.fill(password);
  }

  async clickOnLogin() {
    await this.loginButton.click();
  }

  async loginWithCredentials(userName: string, password: string) {
    await this.fillUserName(userName);
    await this.fillPassword(password);
    await this.clickOnLogin();
  }  

}
