const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.mouse.wheel(0,500)
   /* 
    page.on('dialog',async dialog=>{
        await page.waitForTimeout(3000);//3 sec
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept(); //ok
    })
    await page.click('#alertBtn')*/

    //Confirm Alert:
    /*    
    page.on('dialog',async dialog=>{
        await page.waitForTimeout(3000);//3 sec
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss(); //cancel
    })
    await page.click('#confirmBtn')
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')*/

    //Prompt Alert:
    page.on('dialog',async dialog=>{
        await page.waitForTimeout(3000);//3 sec
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        // await dialog.dismiss(); //cancel
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John')
    })
    await page.click('#promptBtn')
    await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?')
   
    await page.waitForTimeout(3000);//3 sec
})