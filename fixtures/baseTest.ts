import {test as base} from '@playwright/test'
import { LoginPage } from '../pages/Login'
import {ProductPage} from '../pages/products'
import {CartPage} from '../pages/cart'
import { createdUserViaAPI } from '../utils/apiHelper'
 type MyFixtures = {
    loginPage:LoginPage;
    productPage:ProductPage;
    cartPage:CartPage;
    testUser:{email: string; password:string};
 }

export const test  = base.extend<MyFixtures>({
    loginPage: async ({page},use) =>{
        const loginPage = new LoginPage(page);
        await loginPage.navigate()
        await loginPage.navigateToLogin()
        await use(loginPage);
    },
    productPage:async({page},use)=>{
        await use(new ProductPage(page))
    },
    cartPage:async({page},use)=>{
        await use(new CartPage(page))
    },
    testUser: async({}, use)=>{
        const user = await createdUserViaAPI();
        await use(user);
    }
})

export {expect} from '@playwright/test'
