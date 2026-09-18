
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://www.firstcry.com/');

    await page.waitForTimeout(3000)
    await page.locator('#search_box').click()
    await page.keyboard.type('Kids Toys')

    await page.waitForSelector('//*[@id="searchlist"]/ul/li',{state:'visible',timeout:3000})
    const allLists = await page.$$('//*[@id="searchlist"]/ul/li')
    console.log(allLists.length); //11
   
    for(let i of allLists){
        const data = await i.textContent();
        if(data.substring('2-5 years old')){
            await i.click()
            break;
        }
        console.log(data);
        
    }

    await page.waitForTimeout(3000);//3 sec
    // await page.pause()
})