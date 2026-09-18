const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test.describe('Page1',()=>{
    test.beforeAll(async()=>{
        console.log('Before All');
    })
    test.afterAll(async()=>{
        console.log('After All');
        
    })
    test.beforeEach(async({page})=>{
        console.log('Before Each');
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    test.afterEach(async()=>{
        console.log('After Each');
    })

    test('Valid Login', async({page})=>{
          await page.getByPlaceholder('Username').fill('Admin')
    await page.locator("input[type='password']").fill('admin123')
    await page.locator("button[type='submit']").click()

    await page.waitForTimeout(3000);
    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    await expect(page).toHaveURL(url)

    })
    test('Invalid Login',async({page})=>{
            await page.getByPlaceholder('Username').fill('Admin@1')
    await page.locator("input[type='password']").fill('admin')
    await page.locator("button[type='submit']").click()

    const error = await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p').textContent();
    console.log(error);
    
    expect(error.includes('Invalid')).toBeTruthy();
    })

})