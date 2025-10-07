import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { ProductsPage } from "./ProductsPage";

export default class ManagePage {
    constructor(private readonly page: Page) { }

    private _login?: LoginPage;
    private _products?: ProductsPage;

    public get loginPage(): LoginPage {
        if (!this._login) {
            this._login = new LoginPage(this.page);
        }
        return this._login;
    }

    public get productsPage(): ProductsPage {
        if (!this._products) {
            this._products = new ProductsPage(this.page);
        }
        return this._products;
    }
}