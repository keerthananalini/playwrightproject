import {test,expect} from '@playwright/test'
import { link } from 'fs';

test.describe.configure({retries:1})

test('Valid login validation test', async({page})=>{

    // Navigate to the base URL from config
    await page.goto('/',{waitUntil:'commit'});
    await page.getByText('AutomationExercise').nth(1).waitFor()
    await expect(page.locator('body')).toBeVisible();

    // Click on Signup/Login
    await page.getByRole('link',{name:'Signup / Login'}).click();

    await expect(page.getByRole('heading',{name:'Login to your account'})).toBeVisible();

    // Fill login credentials from environment variables
    await page.locator('input[data-qa="login-email"]').fill(process.env.EMAIL!);
    await page.locator('input[data-qa="login-password"]').fill(process.env.PASSWORD!);

    // Click login button
    await page.locator('button[data-qa="login-button"]').click();
    await expect (page.getByText('Logged in as')).toBeVisible()
    await expect (page.getByRole('link',{name:'Logout'})).toBeVisible()
    await expect(page).toHaveURL(/.*\/$/);
    //cookies
    const cookies = await page.context().cookies();
    expect(cookies.length).toBeGreaterThan(0)

}
)