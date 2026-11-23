export class ShoppingCartPage{


    constructor(page){


        this.page=page
        this.checkboxAgree=page.locator( "//input[@id='termsofservice']")
        this.checkout=page.locator("//button[@id='checkout']")
    }
}