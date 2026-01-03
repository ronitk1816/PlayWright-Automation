import {Page,expect} from '@playwright/test'
 export class EditCart{
    page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async navigateToCart(){
        await this.page.locator("#entry_217825").click();
        await this.page.locator('#entry_217850').click();
    }
    async removeProduct(){
        await this.page.locator(".btn-danger").click();
    }

    async validateEmptyCart(emptyCartMessage:string){
        await expect(this.page.locator("//p[text()='Your shopping cart is empty!']").nth(1)).toHaveText(emptyCartMessage);

    }

 }