import {test} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";

test("Login to Website", async ({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.closeAppplication();
})

