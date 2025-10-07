import { ButtonAdapter } from "../Adapter/ButtonAdapter";

import { BasePage } from "./BasicPage";

export class ProductsPage extends BasePage{

    async addItemToCart(label: string) {
        //await this.page.waitForTimeout(5000);
        const addToCartButton = new ButtonAdapter(this.page, "Add to cart", label);
        const removeButton = new ButtonAdapter(this.page, "Remove", label);

        await this.basePageClick(addToCartButton.locator)

        await this.basePageExpectNotVisible(addToCartButton.locator)
        await this.basePageExpectVisible(removeButton.locator)
    }

    async removeItemFromCart(label: string) {
        const addToCartButton = new ButtonAdapter(this.page, "Add to cart", label);
        const removeButton = new ButtonAdapter(this.page, "Remove", label);

        await this.basePageClick(removeButton.locator)

        await this.basePageExpectVisible(addToCartButton.locator)
        await this.basePageExpectNotVisible(removeButton.locator)
    }

    async closePage() {
        this.basePageClosePage();
    }
}