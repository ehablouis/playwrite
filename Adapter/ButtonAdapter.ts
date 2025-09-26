import { Page, Locator, expect } from "@playwright/test";

export class ButtonAdapter {
    private readonly page: Page;
    private readonly buttonLoc: Locator;

    //constructor(page: Page, name: string);

    constructor(page: Page, name: string, lable?: string) {
        if (lable) {
            this.page = page;
            this.buttonLoc = page.locator(`.inventory_item:has-text('${lable}')`).getByRole('button', { name: name });
        } else {
            this.page = page;
            this.buttonLoc = page.getByRole('button', { name: name });
        }

    }

    public async clickBut() {
        await this.buttonLoc.click()
    }

    public async buttonIsVisible() {
        return await this.buttonLoc.isVisible()
    }
} 