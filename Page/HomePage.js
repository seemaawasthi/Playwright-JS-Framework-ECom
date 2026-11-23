export class HomePage{

constructor(page){
    this.page=page
    this.HomePage=page.locator("a[href='https://www.tricentis.com/speed/']");
    this.booksLink = page.locator("//li[@class='inactive']//a[normalize-space()='Books']");
}



}