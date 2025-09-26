import { Page, Locator, expect } from "@playwright/test";

export class IconAdapter {
    private readonly page: Page;
    private readonly iconLoc: Locator;

    constructor(page: Page, name: string) {
        this.page = page;
        this.iconLoc = page.locator(`a[data-test="${name}"]`);
    }

    public async clickOnIcon() {
        await this.iconLoc.click()
    }

    public async iconIsVisible() {
        return await this.iconLoc.isVisible()
    }
} 