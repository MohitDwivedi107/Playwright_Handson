import{test,expect} from  "@playwright/test";

test("checkURL", async({page})=>{
    await page.goto("https://www.flipkart.com/");

     let url:string = page.url();
     console.log(url);

    await expect(page).toHaveURL(/flipkart/);
})