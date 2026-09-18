import {test,expect} from '@playwright/test'
import { pageObject } from './pageObject.spec'
import {url,uname,pass} from './info.spec'

test('Login Test',async({page})=>{
    const obj = new pageObject(page);
    await page.goto(url)
    await page.waitForTimeout(3000)
    await obj.login(uname,pass)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.waitForTimeout(3000)
})