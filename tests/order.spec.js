import { test, expect } from '@playwright/test';

import { LoginPage } from '../Page/LoginPage.js'

import { HomePage } from '../Page/HomePage.js'
import { Bookpage } from '../Page/bookpagelink.js'
import { Checkoutpage } from '../Page/Checkoutpage.js'
import { ShoppingCart, ShoppingCartPage } from '../Page/ShoppingCart.js'
import { thankyou } from '../Page/ThankYoupage.js'
import { getTestData,getRandomCountry ,getRandomeAddress,getRandomePhoneNumber } from '../Utils/dataReader.js'
import { fillInput ,click,mousehover,selectByValue,selectByLabel,selectByIndex } from '../Utils/uihelper.js' 
import { assertText,assertUrl,assertVisibleLocator  } from '../Utils/assert.helper.js'
import { getEnv } from '../Utils/envreader.js'
import{validateordernumberRegex} from '../Utils/Regexhelper.js'


test('Validate book order' ,async({page})=>{
const baseUrl= getEnv('BASE_URL')
const loginData= getTestData('login')
const addressData=getTestData('address')
const paymentmode=getTestData('paymnetinfo')
const booksname=getTestData('books')
const ordernumbersucessfullmessage=getTestData('order')
await page.goto(baseUrl)
const loginPage=new LoginPage(page);
const homepage=new HomePage(page);
const bookPage = new Bookpage(page);
const checkoutPage = new Checkoutpage(page);
const shoppingCart = new ShoppingCartPage(page);
const thankyouPage = new thankyou(page);
await click(loginPage.Loginlink)
await fillInput(loginPage.username,loginData.username)
await fillInput(loginPage.password,loginData.password)
await click(loginPage.loginBtn)
await assertVisibleLocator(homepage.HomePage);
await click(homepage.booksLink);
await click(bookPage.ComputingandInternetAddtocart)
// await page.waitForTimeout(2000)//Not good practice
//await bookPage.fictionAddCartBtn.waitFor({ state: 'visible' }); //Fix
//await bookPage.fictionAddCartBtn
await mousehover(bookPage.showppingcartlink)
await click(bookPage.goTocart)
await click(shoppingCart.checkboxAgree)
await click(shoppingCart.checkout)
// Step 1: Select New Address

await selectByLabel(checkoutPage.billingDropdown,'New Address');
await expect(checkoutPage.Billingaddress1).toBeVisible();
const address = getRandomeAddress();
await fillInput(checkoutPage.Billingaddress1, address.addressLine1);
const country = getRandomCountry();
console.log('Selected country:', country);
await selectByLabel(checkoutPage.countrydropdown,country);
console.log("ZIP:", checkoutPage.zipcode);
await fillInput(checkoutPage.citydropdown, address.city);

await fillInput(checkoutPage.Billingaddress1, address.addressLine1);
console.log("ZIP:", checkoutPage.zipcode);
console.log("PHONE:", checkoutPage.phonenumber);

await fillInput(checkoutPage.zipcode, address.pincode);
   const phonenumber=getRandomePhoneNumber();
await fillInput(checkoutPage.phonenumber, phonenumber);

   await click(checkoutPage.continunebillinaddress);
   await click(checkoutPage.pickupstorecheckbox);
   await click(checkoutPage.shippingcontinuebutton);
   
    await click(
        checkoutPage.paymentcontinuebitton
    );
  await assertText(checkoutPage.paymentinfomationmessage,paymentmode.payment_mode_by_cod);
// Payment Method: click only when visible
if (await checkoutPage.paymentcontinuebitton.isVisible()) {

    await click(checkoutPage.paymentcontinuebitton);

}
  

// Step 5: Payment Information
await assertText(
    checkoutPage.paymentinfomationmessage,
    paymentmode.payment_mode_by_cod
);

// IMPORTANT: Use different locator here
await click(checkoutPage.paymentinformationcontinuebutton);
  

   await assertText(checkoutPage.computingandinternetbookconfirmationorder,booksname.book_ComputingandInternetBook);

  // await assertText(checkoutPage.fixtionbookconfrmationorder,booksname.book_Fiction);
await click(checkoutPage.confirmationbuttonorderpage)

})




    
