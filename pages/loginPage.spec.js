export class loginPage{
    constructor(page){
        this.page = page
    }
    async login(user,pass){
        await this.page.goto('https://www.saucedemo.com/')
        await this.page.waitForTimeout(3000);
        await this.page.fill('#user-name',user);
        await this.page.fill('#password',pass)
        await this.page.click("#login-button")
    }
}