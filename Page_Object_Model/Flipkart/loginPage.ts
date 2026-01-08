import {Page,expect} from '@playwright/test'

export class LoginPage{
    page:Page;

    constructor(page:Page){
        this.page=page;
    }
    async navigateToURL(){
        await this.page.goto("https://www.flipkart.com/");
    }

    async loginMethod(mobileNumber:string){
    await this.page.locator("//span[text()='Login']").click();
    await this.page.locator(".yXUQVt").click();
    await this.page.waitForTimeout(5000);
    await this.page.locator(".yXUQVt").fill(mobileNumber);
    await this.page.getByText("Request OTP").click();
    await expect(this.page.locator("//button[text()='Verify']")).toBeVisible();
    }
}