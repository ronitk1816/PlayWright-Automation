import {Page,expect} from "@playwright/test"

 export class ValidateLogin{
    page:Page;
    constructor(page:Page){
        this.page=page;
    }

    async verifyLogin(dashboardText:string){
    const myAccountText= await this.page.getByText("My Orders").textContent();
     await expect(myAccountText).toContain(dashboardText);
    }

    async navigateToHomePage(){
        await this.page.locator("//i[@class='fa fa-home']").click();
    }
}