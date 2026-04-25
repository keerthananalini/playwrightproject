import {test, expect} from '../fixtures/baseTest'
import { LoginPage } from '../pages/Login'
import {ProductPage} from '../pages/products'
import {CartPage} from '../pages/cart'

test.describe.configure({retries:1})

test('Verify the login scenario',async({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.navigateToLogin();
    await loginPage.login(process.env.NAME!,process.env.PASSWORD!);
    await loginPage.verifyLoginSuccessful();

})

test('Validate the login flow using Invalid credential',async({loginPage})=>{
    await loginPage.login('test@test.com','test123');
    await loginPage.verifyErrorMessage();
})
//this test is just for example
test('Validate the login via API and add UI validation',async({loginPage,testUser})=>{
    await loginPage.login(testUser.email,testUser.password);
    await loginPage.verifyLoginSuccessful()

})

test('checkout the product',async({loginPage,productPage,cartPage})=>{

    await loginPage.login(process.env.EMAIL!,process.env.PASSWORD!);
    await productPage.goTopproduct()
    await productPage.addFirstProductToCart()
    await productPage.viewCart()
    await cartPage.verifyProductcart()
    await cartPage.verifyPrice()
    await cartPage.prooceedToCheckout()
    await cartPage.verifyCheckoutpage()
   
})