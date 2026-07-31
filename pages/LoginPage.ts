import { Locator, Page } from "playwright";

export class LoginPage{
    readonly page:Page;
    readonly signinLink:Locator;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginBtn:Locator;

    constructor(page:Page){
        this.page = page;
        this.signinLink = page.getByRole('link', { name: 'Sign In' })
        this.userNameInput = page.locator('//input[@name="username"]')
        this.passwordInput = page.locator('input[name="password"]')
        this.loginBtn = page.getByRole('button', { name: 'Login' })
    }
    /**
     * Open PET STORE APPLICATION
     */
    async gotoPetStore(){
        await this.page.goto(`${process.env.BASE_URL}`)
    }
    /**
     * Enter User Credentials
     * 
     * @param username 
     * @param password 
     */
    async enterUserCredentials(username:string,password:string){
        await this.signinLink.click()
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click()
    }
}