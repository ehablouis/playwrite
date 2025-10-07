import { Page, Locator, expect } from "@playwright/test";

export class TextBoxAdapter {
    private readonly page: Page;
    private readonly textBoxLoc: Locator;

    constructor(page: Page, name: string) {
        this.page = page;
        this.textBoxLoc = page.locator(`input[name="${name}"]`)
            .or(page.getByPlaceholder(name));
    }

    public get locator(): Locator {
        return this.textBoxLoc;
    }
} 