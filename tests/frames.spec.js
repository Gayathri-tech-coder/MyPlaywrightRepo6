
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://www.leafground.com/frame.xhtml;jsessionid=node03uwj2cs68a3z11n0emfpwvvvh3109674.node0');

    const allFrames = await page.frames();
    console.log('No. of Frames:',allFrames.length);
    
    //using name or url
    const f1 = await page.frame({url:'https://www.leafground.com/default.xhtml'})
    await f1.locator('#Click').click()


    //Nested Frame:
    const f2 = await page.frame({url:'https://www.leafground.com/page.xhtml'})
    const nested  = await f2.childFrames()
    await nested[0].locator('#Click').click()
    
    await page.waitForTimeout(3000);//3 sec
})