import { expect, Locator, Page } from "@playwright/test"


export class CheckoutTwoPage{

    private readonly title : Locator
    private readonly buttonFinish: Locator

    constructor(page: Page){
        this.title = page.locator('//span[@class="title" and contains(text(),"Checkout")]')
        this.buttonFinish = page.getByRole("button", { name: "Finish" })
    }

    async checkTitle(){
        await expect(this.title).toBeVisible()
    }

    async clickOnFinish(){
        await this.buttonFinish.click()
    }

}