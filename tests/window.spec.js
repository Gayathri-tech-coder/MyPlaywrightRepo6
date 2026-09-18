
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://www.leafground.com/window.xhtml;jsessionid=node0xcqordeyux9c6bed7zbaasv32855763.node0');

    const allWindows1 = page.context().pages()
    console.log("No. of Windows(Before Click):",allWindows1.length);

    await page.locator('//*[@id="j_idt88:new"]').click()
    await page.waitForTimeout(3000);//3 sec

    const allWindows2 = page.context().pages()
    console.log("No. of Windows(After Click):",allWindows2.length);
/*
    for(let w of allWindows2){
        console.log("Title:",await w.title());
        
    }
  */
 
    const p2 = allWindows2[1];//dashboard
    await p2.locator('#email').fill('abc@gamil.com')
    await p2.close();    


    await page.waitForTimeout(5000);//5 sec
})