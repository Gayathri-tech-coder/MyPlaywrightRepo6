
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://www.leafground.com/button.xhtml;jsessionid=node0b5r3v3yifl1u1508ivzosa7wb2214765.node0');

    //click button:
    // await page.getByRole('button',{name:'j_idt88:j_idt90'}).click;
    // await page.locator('#j_idt88:j_idt90').click;
    await page.getByText('Click').nth(1).click();
    await page.waitForTimeout(3000);//3 sec
    console.log('Title:',await page.title());//Dashboard
    
    await page.goBack();
    console.log('Title:',await page.title());//Button


    await page.waitForTimeout(3000);//3 sec
})