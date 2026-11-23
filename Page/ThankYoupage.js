export class thankyou {

    constructor(page) {

        this.page = page;

        // Order success message
        this.confimratiomessage = page.locator(
            "//strong[normalize-space()='Your order has been successfully processed!']"
        );

        // Order number
        this.ordernumber = page.locator(
            '.order-completed .order-number'
        );
    }
}