import {Page, Locator, expect} from '@playwright/test'

export class LoginPage{
    readonly page:Page;
    readonly signupLoginLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logedInText : Locator;
    readonly logoutButton : Locator;
    readonly errorMessage : Locator;

    constructor(page:Page){
        this.page = page;
        this.signupLoginLink = page.getByRole('link',{name:'Signup / Login'});
        this.emailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.logedInText = page.getByText('Logged in as');
        this.logoutButton = page.getByRole('link',{name:'Logout'});
        this.errorMessage = page.locator('p:has-text("incorrect")');
    }

    async navigate(){
        await this.page.goto('/',{waitUntil:'commit'});
    }

    async navigateToLogin(){
        await this.signupLoginLink.click();
        await expect(this.page.getByRole('heading',{name:'Login to your account'})).toBeVisible();
    }

    async login(email:string,password:string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        // await expect(this.logedInText).toBeVisible({timeout:10000})
    }

    async verifyLoginSuccessful(){
        await expect(this.logedInText).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
    }

    async verifyErrorMessage(){
        await expect(this.errorMessage).toBeVisible();
    }

}