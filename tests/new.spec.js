const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://www.leafground.com/input.xhtml');

    await page.locator('//*[@id="j_idt88:name"]').fill('John')
    // await page.getByPlaceholder('Babu Manickam').fill('Kiran')

    // await page.keyboard.press('Tab')


    await page.waitForTimeout(3000);//3 sec
})