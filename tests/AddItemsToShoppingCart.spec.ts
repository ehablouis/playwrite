import {test} from "@playwright/test"
import { ProductsPage } from "../pages/ProductsPage"  
import {LoginPage} from "../pages/LoginPage";

test("Add Items to shopping cart", async ({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce");

    const productsPage = new ProductsPage(page);
    await productsPage.addItemToCart("Sauce Labs Backpack");
    await productsPage.addItemToCart("Sauce Labs Fleece Jacket");

});