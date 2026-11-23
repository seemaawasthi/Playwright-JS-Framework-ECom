import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page/LoginPage.js'
import { HomePage } from '../Page/HomePage.js'
import { getTestData } from '../Utils/dataReader.js';
import { click, fillInput } from '../Utils/uihelper.js'
import { assertText, assertVisibleLocator } from '../Utils/assert.helper.js'
import { getEnv } from '../Utils/envreader.js'
test('Validate Login Is successful', async ({ page }) => {

    {
//Read the data from env file 
const baseUrl=getEnv('BASE_URL')

//Read the data from json file 

const  logindata=getTestData('login')

//navigate the url 

await page.goto(baseUrl)


//page object 

const loginpage = new LoginPage(page);
const homepage = new HomePage(page);


await click(loginpage.Loginlink);

await fillInput(loginpage.username, logindata.username);
await expect(loginpage.password).toBeVisible();
await fillInput(loginpage.password, logindata.password);

await click(loginpage.loginBtn);

await assertVisibleLocator(homepage.HomePage);



    }
});

