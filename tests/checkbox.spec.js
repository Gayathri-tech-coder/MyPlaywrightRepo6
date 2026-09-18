
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0,500)
    /*const chk = await page.locator('#sunday')
    const chk = await page.getByLabel('Monday')
    const chk = await page.getByRole('checkbox',{name:'Tuesday'})
    
    await chk.check();

    expect(await chk).toBeChecked();
    await chk.uncheck();
*/

    
    //Select Multiple Checkboxes:
    const checkBoxes = [
        'Sunday','Tuesday','Friday'
    ]
    for(let i of checkBoxes){
        await page.getByLabel(i).check()
    }

    await page.waitForTimeout(3000);//3 sec
})