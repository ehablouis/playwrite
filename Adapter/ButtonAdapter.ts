import { Page, Locator, expect } from "@playwright/test";

export class ButtonAdapter {
    private readonly page: Page;
    private readonly buttonLoc: Locator;

    //constructor(page: Page, name: string);


    constructor(page: Page, name: string, lable?: string) {
        this.page = page;
        if (lable) {
            this.buttonLoc = page.locator(`.inventory_item:has-text('${lable}')`).getByRole('button', { name: name });
        } else {
            this.buttonLoc = page.getByRole('button', { name: name });
        }
    }

    public get locator(): Locator {
        return this.buttonLoc;
    }
} 