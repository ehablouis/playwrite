import { test, expect } from '../fixtures/pom.fixture';

// Test 4: Validate that locked_out_user cannot log in and receives the correct error message.
test.describe('Locked Out User Login', () => {
  test('should not allow locked_out_user to log in', async ({ pm, users }) => {
    await pm.loginPage.openLoginPage();
    await pm.loginPage.userLogin(users.locked_out_user.username, users.locked_out_user.password, false);
    // Error message selector for locked out user (adjust if needed)
    await pm.loginPage.hasErrorMessage("Sorry, this user has been locked out.");
  });
});
