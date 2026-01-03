import {Page, expect} from '@playwright/test'

export class SelectProduct{
    page:Page;
    constructor(page:Page){
        this.page=page;
    }

    async clickOnSoftware(){
        await this.page.locator("//img[@alt='Software']").click();
    }
    async searchForProduct(product:string){
        await this.page.getByPlaceholder("Search For Products").nth(0).fill(product);
        await this.page.locator("//button[text()='Search']").click();
        await this.page.locator("select[name='category_id']").selectOption("Software");
        await this.page.locator("input[value='Search']").click();
        //select the product from the options
       await this.page.locator('//*[@id="mz-product-grid-image-48-212469"]/div/div[1]/img').hover();
       await this.page.getByTitle('Add to Cart').nth(0).click();

    }

}