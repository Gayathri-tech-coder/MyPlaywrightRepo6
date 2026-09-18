
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
  
    await page.getByPlaceholder('Username').fill('Admin')
    await page.locator("input[type='password']").fill('admin123')
    await page.locator("button[type='submit']").click()

    await page.waitForTimeout(3000);
    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    await expect(page).toHaveURL(url)

    await page.getByAltText('profile picture').first().click()
    await page.getByText('Logout').click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//auth
  

    //Invalid
    /*
    await page.getByPlaceholder('Username').fill('Admin@1')
    await page.locator("input[type='password']").fill('admin')
    await page.locator("button[type='submit']").click()

    const error = await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p').textContent();
    console.log(error);
    
    expect(error.includes('Invalid')).toBeTruthy();
*/
    await page.waitForTimeout(3000);//3 sec
})