const {test,expect} = require('@playwright/test')
test.describe.configure({mode:"serial"})
let a;
test('Test1',async()=>{
    a=10;
    console.log(a);
})
test('Test2',async()=>{
    console.log(a);
})
