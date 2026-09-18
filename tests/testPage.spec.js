const {test,expect} = require('@playwright/test');
const { log } = require('node:console');
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://www.google.com/');
    const pTitle = await page.title();
    console.log("Title : ",pTitle);
    
    const pUrl =await page.url();
    console.log("URL : ",pUrl);
    
    await expect(page).toHaveTitle('Google');
    await expect(page).toHaveURL('https://www.google.com/');
    await page.waitForTimeout(3000);//3 sec
    // await page.pause();
})