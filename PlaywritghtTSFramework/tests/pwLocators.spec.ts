import {test,expect,Locator} from "@playwright/test" ;

test("testgetByAltText", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");

    const logo:Locator = page.getByAltText("nopCommerce demo store");

    await expect(logo).toBeVisible();

    await expect(page.getByText("Welcome to our store")).toBeVisible();

    // await page.getByRole("link",{name:"Register"}).click();

    // await expect(page.getByRole("heading",{name:"Register"})).toBeVisible();

});

test("testGetByRole", async({page})=>{

    await page.goto("https://demo.nopcommerce.com/");

    await page.getByRole("link",{name:"Register"}).click();

    await expect(page.getByRole("heading",{name:"Register"})).toBeVisible(); 

});