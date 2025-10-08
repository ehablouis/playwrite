/**
 * This file defines Playwright test fixtures for Page Object Model (POM) management.
 * 
 * Usage:
 *   import { test, expect } from './fixtures/pom.fixture';
 * 
 * Fixtures:
 *   - pm: Provides an instance of PomManager for page interactions.
 *   - users: Loads multiple user credentials from a JSON file for testing different user roles.
 */

import { test as base } from '@playwright/test';
import PomManager from '../pages/ManagePage';
import fs from 'fs';

type UserData = {
    username: string;
    password: string;
};

type MyFixtures = {
    pm: PomManager;
    users: {
        standard_user: UserData;
        locked_out_user: UserData;
        problem_user: UserData;
        performance_glitch_user: UserData;
        error_user: UserData;
        visual_user: UserData;
    };
}

/**
 * Extends the base test with custom fixtures.
 *
 * @remarks
 * - `pm`: Provides an instance of `PomManager` for the current test, allowing page object model operations.
 * - `users`: Loads multiple user credentials from a JSON file for testing different user roles and scenarios.
 */
export const test = base.extend<MyFixtures>({

    pm: async ({ page }, use) => {
        const pom = new PomManager(page);
        await use(pom);
    },

    users: async ({ }, use) => {
        const data = fs.readFileSync('./test-data/validUsers.json', 'utf-8');
        const users = JSON.parse(data);
        await use(users);
    }
});

export { expect } from '@playwright/test';