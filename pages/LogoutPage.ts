import { Locator, Page } from "playwright";

export class LogoutPage{
    readonly page:Page;
    readonly signOutLink:Locator;

    constructor(page:Page){
        this.page = page;
        this.signOutLink = page.getByRole('link', { name: 'Sign Out' })
    }

    async clickOnSignoutLink(){
        await this.signOutLink.click()
    }
}