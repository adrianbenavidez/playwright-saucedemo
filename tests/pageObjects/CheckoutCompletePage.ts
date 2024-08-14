import { expect, Locator, Page } from "@playwright/test"

export class CheckoutCompletePage{

    private readonly checkMessage: Locator

    constructor(page:Page){
        this.checkMessage = page.locator('//h2[@class="complete-header" and contains(text(),"Thank")]')
    }

    async checkMessageFinish(){

        await expect(this.checkMessage).toBeVisible()
    }


    //await expect(page.locator('//h2[@class="complete-header" and contains(text(),"Thank")]')).toBeVisible();

}