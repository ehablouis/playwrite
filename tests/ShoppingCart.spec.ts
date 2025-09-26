import { test, expect } from '@playwright/test';
import { openApplication, login, closeAppplication } from '../pages/LoginPage';
import { addItemToCart, removeItemFromCart, isButtonVisible } from '../pages/ProductsPage';

test('Login to Website"', async ({ page }) => {

    await openApplication(page)
    await login(page, "standard_user", "secret_sauce")
    await closeAppplication(page)
});

test("Add Items to shopping cart", async ({ page }) => {

    await openApplication(page)
    await login(page, "standard_user", "secret_sauce")

    await addItemToCart(page, "Sauce Labs Backpack")
    await addItemToCart(page, "Sauce Labs Fleece Jacket");

    expect(await isButtonVisible(page, "Add to cart", "Sauce Labs Backpack")).toBeFalsy()
    expect(await isButtonVisible(page, "Add to cart", "Sauce Labs Fleece Jacket")).toBeFalsy()

    expect(await isButtonVisible(page, "Remove", "Sauce Labs Backpack")).toBeTruthy()
    expect(await isButtonVisible(page, "Remove", "Sauce Labs Fleece Jacket")).toBeTruthy()

    await closeAppplication(page)
});

test("Remove Items from shopping cart", async ({ page }) => {

    await openApplication(page)
    await login(page, "standard_user", "secret_sauce")

    await addItemToCart(page, "Sauce Labs Backpack")
    await addItemToCart(page, "Sauce Labs Fleece Jacket");

    expect(await isButtonVisible(page, "Add to cart", "Sauce Labs Backpack")).toBeFalsy()
    expect(await isButtonVisible(page, "Add to cart", "Sauce Labs Fleece Jacket")).toBeFalsy()

    expect(await isButtonVisible(page, "Remove", "Sauce Labs Backpack")).toBeTruthy()
    expect(await isButtonVisible(page, "Remove", "Sauce Labs Fleece Jacket")).toBeTruthy()

    await removeItemFromCart(page, "Sauce Labs Backpack");
    expect(await isButtonVisible(page, "Add to cart", "Sauce Labs Backpack")).toBeTruthy()
    expect(await isButtonVisible(page, "Remove", "Sauce Labs Backpack")).toBeFalsy()

    await closeAppplication(page)
});