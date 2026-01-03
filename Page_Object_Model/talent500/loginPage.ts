import { Page, Locator, expect } from '@playwright/test'

export class LoginPage {

    // readonly userName_field: Locator;
    // readonly password_field: Locator;
    // readonly loginButton_field: Locator;
    page: Page;

    constructor(page: Page) {
        this.page = page;
        // this.userName_field = page.getByPlaceholder("Email");
        // this.password_field = page.getByPlaceholder("Password");
        // this.loginButton_field = page.locator("button[data-id='submit-login-btn']");
    }
    
    async goToSite(){
        await this.page.goto("https://talent500.com/auth/signin/");
    }
    async performLogin(username: string, password: string) {
        await this.page.getByPlaceholder("Email").fill(username);
        await this.page.getByPlaceholder("Password").fill(password);
        await this.page.locator("button[data-id='submit-login-btn']").click();
    }
    async validateLogin(loginVerify: string) {
        const text = this.page.getByText("Discover jobs");
        expect(text).toHaveText(loginVerify);
    }

    async logout(){
        await this.page.locator("img[alt='DropDown Button']").click();
        await this.page.locator("button[data-id='nav-dropdown-logout']").click();
    }

    async verifyAfterLogOut(){
    await expect(this.page.locator("button[data-id='login-signup-link']")).toBeVisible();
    }
}