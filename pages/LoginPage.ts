import { Page, Locator , expect} from "@playwright/test";

export class LoginPage{
    readonly page : Page;
    readonly usernameTextfield: Locator;
    readonly passwordTextfield: Locator;
    readonly loginButton: Locator;

    constructor(page : Page){
        this.page = page;
        this.usernameTextfield = page.locator("input[name='user-name']");
        this.passwordTextfield = page.locator("input[name='password']");
        this.loginButton = page.getByRole('button', {name : 'Login'});

    }

    async openApplication(){

        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page).toHaveTitle('Swag Labs');
        console.log("The website is opened!");
    }

    async login(username: string, password : string){

        await this.usernameTextfield.fill(username);
        await this.passwordTextfield.fill(password);
        await this.loginButton.click();

        await expect(this.page.getByRole('link', {name : 'shopping-cart-link'} )).toBeTruthy;

    }

    async closeAppplication(){
        this.page.close();
    }
}