
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://vinothqaacademy.com/mouse-event/');

    //Hover:
   /* const act = await page.locator('#tooltipTarget')
    await act.hover()
    expect(page.locator('#tooltipStatus')).toHaveText('Tooltip Visible ✅')*/

    //double click:
    //const act = await page.locator('#doubleBtn')
    //await act.dblclick()


    //right click:
    const act = await page.locator('#rightBtn')
    await act.click({button:'right'})
    await page.getByText('Edit').click()
    
    await page.waitForTimeout(3000);//3 sec
})