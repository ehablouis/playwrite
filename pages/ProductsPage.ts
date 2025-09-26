import { Page, expect } from "@playwright/test";
import { ButtonAdapter } from "../Adapter/ButtonAdapter";
import { IconAdapter } from "../Adapter/IconAdapter";

export async function addItemToCart(page: Page, lable: string) {

    const addToCartButton = new ButtonAdapter(page, "Add to cart", lable);

    await addToCartButton.clickBut();
}

export async function removeItemFromCart(page: Page, lable: string) {

    const removeButton = new ButtonAdapter(page, "Remove", lable);

    await removeButton.clickBut();
}

export async function isButtonVisible(page: Page, name: string, lable: string) {
    const button = new ButtonAdapter(page, name, lable);

    return button.buttonIsVisible();
} 