import { locators } from "./locators.spec";
import {page} from '@playwright/test';
export class pageObject{
    constructor(page){
        this.page = page
    }
    async login(username,password){
        await this.page.fill(locators.username,username)
        await this.page.fill(locators.password,password)
        await this.page.click(locators.loginButton)
    }
}