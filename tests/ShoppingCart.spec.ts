import { test, expect } from '../fixtures/pom.fixture';

test.describe('Shopping Cart Tests', () => {

    test.beforeEach(async ({ pm, users}) => {
        await pm.loginPage.openLoginPage();
        await pm.loginPage.userLogin(users.standard_user.username, users.standard_user.password);
    });

    test.afterEach(async ( { pm } ) => {
        await pm.productsPage.closePage();
    });

    test("Add Items to shopping cart", async ({ pm } ) => {

        await pm.productsPage.addItemToCart("Sauce Labs Backpack")
        await pm.productsPage.addItemToCart("Sauce Labs Fleece Jacket");
    });

    test("Remove Items from shopping cart", async ({ pm } ) => {

        await pm.productsPage.addItemToCart("Sauce Labs Backpack")
        await pm.productsPage.addItemToCart("Sauce Labs Fleece Jacket");

        await pm.productsPage.removeItemFromCart("Sauce Labs Backpack");
        await pm.productsPage.removeItemFromCart("Sauce Labs Fleece Jacket");
    });
});
