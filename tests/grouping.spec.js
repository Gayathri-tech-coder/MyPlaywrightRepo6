import {test,expect} from '@playwright/test'
test.use({viewport:{width:1536, height:864}})
test.describe.only('Electronics',()=>{
    test('Mobile',async({page})=>{
        console.log('Mobile test is running...');
    })
    test('Laptop',async({page})=>{
        console.log('Laptop test is running...');
    })
})
test.describe('Home Appliances',()=>{
    test('Fridge',async({page})=>{
        console.log('Fridge test is running...');
    })
})


