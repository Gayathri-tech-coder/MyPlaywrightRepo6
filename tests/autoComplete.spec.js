
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.getByPlaceholder('Search Wikipedia').first().fill('Computer')
    await page.waitForSelector("li[role='option']")

    const allLists = await page.$$("li[role='option']")
    console.log(allLists.length); //11

    for(let i of allLists){
        const data = await i.textContent();
        if(data.includes('Computer keyboard')){
            await i.click()
            break;
        }
    }
    


    await page.waitForTimeout(3000);//3 sec
})