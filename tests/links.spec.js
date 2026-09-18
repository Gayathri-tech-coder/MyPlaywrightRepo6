
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://www.leafground.com/link.xhtml;jsessionid=node0c5g9xoo6d6nmacw4cfykrfr82643303.node0');

    // await page.getByText('Go to Dashboard').first().click() //index 0
    // await page.getByText('Go to Dashboard').nth(1).click()//index 1
    // await page.waitForTimeout(3000);
    //navigation:
    // await page.goBack()


    //Count links in the page:
    const allLinks = await page.locator('a').all()
    console.log("No. of Links:",allLinks.length);
    for(const link of allLinks){
        if(link.getByText('Broken?')){
            await page.getByText('Broken?').click()
            break
        }
    }


    await page.waitForTimeout(3000);//3 sec
})