import { test, expect } from '@playwright/test';
import ManagePage from '../pages/ManagePage';

test.describe('Shopping Cart Tests', () => {
    let mp: ManagePage;

    test.beforeEach(async ({ page }) => {
        mp = new ManagePage(page);
        await mp.loginPage.openLoginPage();
        await mp.loginPage.userLogin("standard_user", "secret_sauce");
    });

    test.afterEach(async () => {
        await mp.productsPage.closePage();
    });

    test("Add Items to shopping cart", async () => {

        await mp.productsPage.addItemToCart("Sauce Labs Backpack")
        await mp.productsPage.addItemToCart("Sauce Labs Fleece Jacket");
    });

    test("Remove Items from shopping cart", async () => {

        await mp.productsPage.addItemToCart("Sauce Labs Backpack")
        await mp.productsPage.addItemToCart("Sauce Labs Fleece Jacket");

        await mp.productsPage.removeItemFromCart("Sauce Labs Backpack");
        await mp.productsPage.removeItemFromCart("Sauce Labs Fleece Jacket");
    });
});
