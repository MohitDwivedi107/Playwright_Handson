import {test,expect} from "@playwright/test";

test("title",async ({page})=>{

   await page.goto("https://www.flipkart.com/");
    let titl: string = await page.title();
    console.log(titl);
   await expect(page).toHaveTitle("Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com");
})
