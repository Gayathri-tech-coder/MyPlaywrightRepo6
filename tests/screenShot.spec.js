
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://www.leafground.com/');

    //Page:
    // await page.locator('#Email').fill('abc@gmail.com')
    // await page.screenshot({path:'tests/Screenshots/'+'TestingPage.jpg'})

    //Element:
    // const element =await page.locator('#email')
//    await element.screenshot({path:'tests/Screenshots/'+'element.jpg'})

    //Part of Page:
    await page.screenshot({
        path:'tests/Screenshots/'+'partPage.jpg',
        clip:{x:30,y:80,width:300,height:300}
    })
    await page.waitForTimeout(3000);//3 sec
})