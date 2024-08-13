import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly userNameTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.userNameTextBox = page.locator("input[id='user-name']");
    this.passwordTextBox = page.locator("input[id='password']");
    this.loginButton = page.locator("input[id='login-button']");
  }

  async fillUserName(){
    this.userNameTextBox.fill("standard_user")
  }

  async fillPassword(){
    this.passwordTextBox.fill("secret_sauce")
  }

  async clickOnLogin(){
    this.loginButton.click()
  }


}
