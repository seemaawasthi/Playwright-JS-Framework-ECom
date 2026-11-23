export class LoginPage{


    constructor(page){

this.page=page
this.Loginlink=page.locator(".ico-login")
this.username=page.locator("#Email")
this.password = page.locator('input[type="password"]');
this.loginBtn=page.locator("//input[@value='Log in']")




    }

    async login(user ,password){

        await this.Loginlink.click()
        await this.username.fill(user)
        
        await this.password.fill(password)
        await this.loginBtn.click()
    }


}