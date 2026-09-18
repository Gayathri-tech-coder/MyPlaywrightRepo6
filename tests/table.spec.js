
const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1536, height:864}})
test('Page1',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0,2500)
    //static table:
/*    const staticTable = await page.locator("table[name='BookTable']")
    const columnHeadings = await staticTable.locator('tr th')
    console.log('No. of Columns:',await columnHeadings.count());

    const rows = await staticTable.locator('tr')
    console.log('No. of Rows:',await rows.count());
    for(let i=0;i<await rows.count();i++){
        // console.log(await rows.nth(i).textContent());
        const row = await rows.nth(i).textContent()
        if(await row.includes('Amit')){
            console.log(row);   
            }
    }
       */
        
        //Pagination Table:
        const paginationTable = await page.locator('#productTable')
        const columnHeadings = await paginationTable.locator('thead tr th')
        console.log('No. of Columns:',await columnHeadings.count());

        const rows = await paginationTable.locator('tbody tr')
        console.log('No. of Rows:',await rows.count());

        /*
        const selectRow = rows.filter({
            has : page.locator('td'),
            hasText : 'Tablet'
        })
        selectRow.locator('input').check()
    */

        const pages = await page.locator('//*[@id="pagination"]/li/a')
        const allPages = await pages.count()
        console.log('Total Pages : ',allPages);
        
        for(let p=0;p<allPages;p++){
            await pages.nth(p).click()
            for(let i=0;i<=allPages;i++){
                const r = rows.nth(i)
                // const data = r.locator('td')
                console.log(await r.textContent());
                
            }            
        }

        await page.waitForTimeout(3000);//3 sec
})