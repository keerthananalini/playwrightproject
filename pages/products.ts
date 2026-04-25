import {Page,expect} from '@playwright/test'

export class ProductPage{
    constructor(private page: Page){}

    async goTopproduct(){
        await this.page.getByRole('link',{name:'Products'}).click()
        await expect(this.page.getByText('All Products')).toBeVisible()
    }

    async addFirstProductToCart(){
        await this.page.locator('.product-image-wrapper').hover();
        await this.page.locator('text=Add to cart').first().click()
    }

    async viewCart(){
        await this.page.getByRole('link',{name:'View cart'}).click()
    }

}