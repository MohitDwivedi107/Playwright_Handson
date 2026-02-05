import {test, expect} from "@playwright/test";
import {loginPage} from '../pages//loginPage.spec';



test("testlogin",async({page})=>{
const lpg = new loginPage(page);
await page.goto('https://www.flipkart.com/');
await lpg.login();
})
