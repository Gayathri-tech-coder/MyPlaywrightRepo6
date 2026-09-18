
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Valid Login',async({page})=>{
    await page.goto('');


    await page.waitForTimeout(3000);//3 sec
})