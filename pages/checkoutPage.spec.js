export class checkoutPage{
    constructor(page){
        this.page = page
    }
    async confirmOrder(){
        await this.page.click('#add-to-cart-sauce-labs-backpack')
        await this.page.click('#shopping_cart_container')
        await this.page.click('#checkout')

        //information
        await this.page.locator('#first-name').fill('A')
        await this.page.locator('#last-name').fill('B')
        await this.page.locator('#postal-code').fill('123')
        await this.page.click('#continue')
        await this.page.click('#finish')
    }
}