
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://vinothqaacademy.com/mouse-event/');

    //slider:
    await page.mouse.wheel(0,700)
    const slider = await page.locator('#handle_max')
    const box = await slider.boundingBox()
    if(box){
        console.log(`Position: (${box.x}, ${box.y})`);
        console.log(`Size:${box.width}px , ${box.height}`);
        
        
        const val_x = box.x+(box.width*5)
        const val_y = box.y+(box.height/2)
        await page.mouse.move(box.x,val_y)
        await page.mouse.down()
        await page.mouse.move(val_x,val_y)
        await page.mouse.up()
        console.log(`Position: (${val_x}, ${val_y})`);
    }

    await page.waitForTimeout(3000);//3 sec
})