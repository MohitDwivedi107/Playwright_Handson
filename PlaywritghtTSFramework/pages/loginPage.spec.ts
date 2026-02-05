import {expect, Page} from "@playwright/test";

 export class loginPage{
    page: Page;
    private login_Link:any;
    private mobile_Editbox:any;
    private otp_Btn:any;
    private otpError:any;

     constructor (page:Page){
        this.page = page;   
        this.login_Link = page.locator("//span[text()='Login']");
        this.mobile_Editbox = page.locator("input.c3Bd2c.yXUQVt");
        this.otp_Btn = page.getByRole("button",{name:'Request OTP'});
        this.otpError=page.locator("//span[contains(text(),'enter valid')]");
    }
   

    async login(){
        try{
        await this.login_Link.click();
        await this.mobile_Editbox.fill("1234");
        await this.otp_Btn.click();
        await expect(this.otpError).toBeVisible();
        }
        catch(err:any){
            console.log(err.message);
        }
    }
    


}