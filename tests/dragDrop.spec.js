
const {test,expect} = require('@playwright/test');
const { url } = require('node:inspector');
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/');

    const frame1 = await page.frame({url:'https://jqueryui.com/resources/demos/droppable/default.html'})
    const drag = await frame1.locator('#draggable')
    const drop = await frame1.locator('#droppable')

    //Way-1:
    /*
    await drag.hover()
    await page.mouse.down()
    await drop.hover()
    await page.mouse.up()
*/

    await drag.dragTo(drop);

    await page.waitForTimeout(3000);//3 sec
})