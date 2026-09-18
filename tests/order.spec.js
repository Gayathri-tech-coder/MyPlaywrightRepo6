import {test,expect} from '@playwright/test'
import { OrderFacade } from '../pages/facades/OrderFacade.spec'

test('Order Product',async({page})=>{
    const obj = new OrderFacade(page);
    await obj.placeOrder("standard_user","secret_sauce")
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
})