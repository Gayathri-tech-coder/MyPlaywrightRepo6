const {test,expect} = require('@playwright/test')

test('Test-1', async function({page}){
    expect(12).toBe(10);
})

test.only('Test-2', async function({page}){
    expect(100).toBe(100);
})

test('Test-3', async function({page}){
    expect("John").toBe("John");
})