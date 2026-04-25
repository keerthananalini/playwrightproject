import {Page,expect} from '@playwright/test'

export class CartPage{
    constructor(private page: Page){}


    async verifyProductcart(){
        await expect(this.page.locator('.cart_description')).toBeVisible();
    }

    async verifyPrice(){
        const price = await this.page.locator('.cart_price').first().textContent();
        expect(price).not.toBeNull();  
    }

    async prooceedToCheckout(){
        await this.page.getByText('Proceed To Checkout').click()
    }

    async verifyCheckoutpage(){
        await expect(this.page.getByText('Address Details')).toBeVisible()
    }
}