import { Page, expect } from "@playwright/test";
import { ButtonAdapter } from "../Adapter/ButtonAdapter";
import { IconAdapter } from "../Adapter/IconAdapter";
import { TextBoxAdapter } from "../Adapter/TextBoxAdapter";


export async function openApplication(page: Page) {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    console.log("The website is opened!");
}

export async function login(page: Page, username: string, password: string) {

    const usernameTextBox = new TextBoxAdapter(page, "Username");
    await usernameTextBox.setValue(username)
    expect(await usernameTextBox.getValue()).toEqual(username)

    const passwordTextBox = new TextBoxAdapter(page, "Password");
    await passwordTextBox.setValue(password)

    const loginButton = new ButtonAdapter(page, "Login");
    await loginButton.clickBut()

    const shoppingCartIcon = new IconAdapter(page, "shopping-cart-link");

    expect(await shoppingCartIcon.iconIsVisible()).toBeTruthy();

}

export async function closeAppplication(page: Page) {
    page.close();
}
