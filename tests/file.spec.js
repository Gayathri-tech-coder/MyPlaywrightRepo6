
const {test,expect} = require('@playwright/test');
const { pathToFileURL } = require('node:url');
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{

//File upload:
/*
    await page.goto('https://the-internet.herokuapp.com/upload');
    const f = await page.locator('#file-upload')
    await f.setInputFiles('C:/Users/balaji/Downloads/one.py')
    await page.locator('#file-submit').click()
*/

    await page.goto('https://the-internet.herokuapp.com/download');
    const downloadEvent  = page.waitForEvent('download')
    await page.getByText('sample.txt').click()
    const download = await downloadEvent;

    const path = await download.suggestedFilename();//sample.txt
    await download.saveAs('./downloads/'+path)



    await page.waitForTimeout(3000);//3 sec
})