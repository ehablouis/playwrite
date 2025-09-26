import { Page, Locator, expect } from "@playwright/test";

export class TextBoxAdapter {
    private readonly page: Page;
    private readonly textBoxLoc: Locator;

    constructor(page: Page, name: string) {
        this.page = page;
        this.textBoxLoc = page.locator(`input[name="${name}"]`)
            .or(page.getByPlaceholder(name));
    }

    public async getValue(): Promise<string> {
        return await this.textBoxLoc.inputValue();
    }

    public async setValue(value: string) {
        await this.textBoxLoc.fill(value)
    }
} 