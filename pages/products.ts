import {Page,expect} from '@playwright/test'

export class ProductPage{
    constructor(private page: Page){}

    async goTopproduct(){
        await this.page.getByRole('link',{name:'Products'}).click()
        await expect(this.page.getByText('All Products')).toBeVisible()
    }

    async addFirstProductToCart(){
        const firstProduct = this.page.locator('.product-image-wrapper').nth(0);
        await firstProduct.hover();
        await this.page.locator('a[data-product-id="1"]').nth(1).click()
    }

    async viewCart(){
        await this.page.getByRole('link',{name:'View cart'}).click()
    }

}