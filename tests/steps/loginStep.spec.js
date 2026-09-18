import { chromium } from "@playwright/test";
import { expect } from "@playwright/test";
const {createBdd} = require('playwright-bdd')
const {Given,When,Then} =createBdd()

let browser,page;
Given('user enters url', async ({}) => {
    browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    page = await context.newPage();
    await page.goto('https://www.saucedemo.com/')
});

When('user enters username', async ({}) => {
    await page.fill('#user-name',"standard_user")
 
});

When('user enters password', async ({}) => {
 await page.fill('#password',"secret_sauce")
});

When('clicks login button', async ({}) => {
 await page.click('#login-button')
});

Then('login must be success', async ({}) => {
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
 console.log('Login Success!');
 
});