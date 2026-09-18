
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://www.leafground.com/select.xhtml');

    const dropdwon = await page.locator('select.ui-selectonemenu')
    // dropdwon.selectOption({label:'Playwright'})
    dropdwon.selectOption({index:1})//Selenium

    await page.waitForTimeout(3000);//3 sec
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    const d = await page.locator('#dropdown')
    d.selectOption({value:"2"})//Option 2
    

    await page.waitForTimeout(3000);//3 sec
})