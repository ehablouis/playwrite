import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /* ============== Navigation ==============*/
    // Navigate to a specific URL

    protected async goToUrl(url: string) {
        await this.page.goto(url);
    }

    /* ==============  Low level helpers ==============*/
    /**
     * Clicks an element specified by a selector or Locator.
     * @param selector - CSS selector string or Locator
     */
    protected async basePageClick(selector: string | Locator) {
        const locator = this.toLocator(selector);
        await locator.click();
    }

    /**
     * Fills an input element specified by a selector or Locator.
     * @param selector - CSS selector string or Locator
     * @param value - Value to fill
     */
    protected async basePageFill(selector: string | Locator, value: string) {
        const locator = this.toLocator(selector);
        await locator.fill(value);
    }

    /**
     * Checks if an element specified by a selector or Locator is visible.
     * @param selector - CSS selector string or Locator
     * @returns Promise<boolean>
     */
    protected async basePageExpectVisible(selector: string | Locator) {
        const locator = this.toLocator(selector);
        await expect(locator).toBeVisible();
    }

    /**
    * Checks if an element specified by a selector or Locator is not visible.
    * @param selector - CSS selector string or Locator
    * @returns Promise<boolean>
    */
    protected async basePageExpectNotVisible(selector: string | Locator) {
        const locator = this.toLocator(selector);
        await expect(locator).toBeHidden();
    }

    /**
     * Checks if the page title matches the expected value.
     * @param expectedTitle - The expected page title
     */
    protected async basePageExpectTitel(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    /**
     * Closes the current page.
     */
    protected async basePageClosePage() {
        await this.page.close();
    }

    /* ============== Utility ==============*/
    /**
     * Converts a string selector or Locator to a Locator.
     * @param selector - CSS selector string or Locator
     * @returns Locator
     */
    protected toLocator(selector: string | Locator): Locator {
        if (typeof selector === 'string') {
            return this.page.locator(selector);
        }
        return selector;
    }
}