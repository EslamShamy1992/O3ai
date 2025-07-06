import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';

let loginpage:loginPage;
let username:string,
password:string;
test.describe('Login TestCases', async () => {

  test.beforeEach(async({page})=> {
    loginpage= new loginPage(page);
    username='Admin2'
    password='987654'
   await page.goto('/login');

  });
  
test('login with as valid credentials', async ({ page }) => {

await loginpage.login_with_valid_account(username,password)
await expect(page.getByRole('button', { name: 'Profile' }).first()).toBeVisible()


});

});

