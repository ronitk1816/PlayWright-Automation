import {Page,expect} from '@playwright/test'
 export class IpodProductLogin{
    page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async navigateToUrl(){
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    }

    async login(username:string,password:string){
        await this.page.getByPlaceholder("E-Mail Address").fill(username);
        await this.page.getByPlaceholder("Password").fill(password);
        await this.page.locator("input[value='Login']").click();
    }
    
}