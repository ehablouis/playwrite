import { Page, Locator, expect } from "@playwright/test";

export class IconAdapter {
    private readonly page: Page;
    private readonly iconLoc: Locator;

    constructor(page: Page, name: string) {
        this.page = page;
        this.iconLoc = page.locator(`a[data-test="${name}"]`);
    }
    
    public get locator(): Locator {
        return this.iconLoc;
    }
} 