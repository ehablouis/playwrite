import { BasePage } from "./BasicPage";
import { ButtonAdapter } from "../Adapter/ButtonAdapter";
import { IconAdapter } from "../Adapter/IconAdapter";
import { TextBoxAdapter } from "../Adapter/TextBoxAdapter";


export class LoginPage extends BasePage {
    async openLoginPage() {
        await this.goToUrl('/');
        await this.basePageExpectTitel('Swag Labs');
        console.log("Login page opened!");
    }


    async userLogin(username: string, password: string, validate: boolean = true) {
        const usernameTextBox = new TextBoxAdapter(this.page, "Username");
        await this.basePageFill(usernameTextBox.locator, username);

        const passwordTextBox = new TextBoxAdapter(this.page, "Password");
        await this.basePageFill(passwordTextBox.locator, password);

        const loginButton = new ButtonAdapter(this.page, "Login");
        this.basePageClick(loginButton.locator)

        if (validate) {
            const shoppingCartIcon = new IconAdapter(this.page, "shopping-cart-link");
            await this.basePageExpectVisible(shoppingCartIcon.locator);
        }
    }

    async hasErrorMessage(value: string) {
        const errorMessage = this.page.locator('[data-test="error"]');
        await this.basePageExpectVisible(errorMessage);
        await this.containsValue(await errorMessage.textContent() || "", value);
    }

    async closePage() {
        this.basePageClosePage();
    }
}
