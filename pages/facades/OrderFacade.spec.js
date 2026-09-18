import { loginPage } from "../loginPage.spec";
import { checkoutPage } from "../checkoutPage.spec";

export class OrderFacade{
    constructor(page){
        this.logPage = new loginPage(page);
        this.checkPage = new checkoutPage(page);
    }
    //interface:
    async placeOrder(user,pass){
        await this.logPage.login(user,pass);
        await this.checkPage.confirmOrder();
    }
}