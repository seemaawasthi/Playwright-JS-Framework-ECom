export class Checkoutpage{


    constructor(page){

       this.page=page
       this.billingDropdown = page.locator('#billing-address-select');
            this.Billingaddress1 =page.locator('#BillingNewAddress_Address1');
       this.countrydropdown=page.locator("//select[@id='BillingNewAddress_CountryId']")
       this.citydropdown=page.locator("#BillingNewAddress_City")
       this.Billingaddress1=page.locator("//input[@id='BillingNewAddress_Address1']")
       this.zipcode=page.locator("#BillingNewAddress_ZipPostalCode")
       this.phonenumber=page.locator(" #BillingNewAddress_PhoneNumber")
       this.continunebillinaddress=page.locator("input[onclick='Billing.save()']")
       this.pickupstorecheckbox=page.locator(" //input[@id='PickUpInStore']")
       this.shippingcontinuebutton=page.locator("//input[@onclick='Shipping.save()']")
         this.paymentinformationcontinuebutton = page.locator('.payment-info-next-step-button');
      this.paymentinfomationmessage=page.locator("//p[normalize-space()='You will pay by COD']")
       this.continuebuttonsubmiison=page.locator("//input[@class='button-1 payment-info-next-step-button']")
        this.computingandinternetbookconfirmationorder=page.locator("//a[@class='product-name'][normalize-space()='Computing and Internet']")
      this.fixtionbookconfrmationorder=page.locator("//a[@class='product-name'][normalize-space()='Fiction']")
      this.confirmationbuttonorderpage=page.locator(".confirm-order-next-step-button")
   // Step 4 - Payment Method
this.paymentcontinuebitton = page.locator(
    '.payment-method-next-step-button'
);

// Step 5 - Payment Information
this.paymentinformationcontinuebutton = page.locator(
    '.payment-info-next-step-button'
);
    }
}