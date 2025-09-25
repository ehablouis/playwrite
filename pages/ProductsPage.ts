import { Page, Locator, expect } from "@playwright/test";

export class ProductsPage{
    readonly page : Page;
    addToCartButton : Locator;
    readonly removeButton : Locator;
    readonly shoppingCartIcon : Locator;

    constructor(page : Page){
        this.page = page;
        this.addToCartButton = this.page.getByRole('button',{name : "Add to cart"} );
        this.removeButton = this.page.getByRole('button',{name : "Remove"} );
        this.shoppingCartIcon = this.page.getByRole('link',{name : "shopping-cart-link"} );
    }
    
    async addItemToCart(item: string){

        this.addToCartButton = this.page.locator(".inventory_item:has-text('" + item + "')").getByRole('button', {name : "Add to cart"});
        await this.addToCartButton.click();
    }  
}