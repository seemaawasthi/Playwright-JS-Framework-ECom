    export class Bookpage{


        constructor(page){


            this.page=page
            this.ComputingandInternetAddtocart= page.locator("(//input[@value='Add to cart'])[1]")
            this.FictionEx=page.locator("(//input[@value='Add to cart'])[2]")
            this.showppingcartlink=page.locator( "//span[normalize-space()='Shopping cart']")
            this.goTocart=page.locator( "//input[@value='Go to cart']")
        }
    }