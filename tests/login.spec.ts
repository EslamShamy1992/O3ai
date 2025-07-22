import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { config } from 'dotenv';
config();
let loginpage:loginPage;
let username:string,
password:string;
test.describe('Login TestCases', async () => {

  test.beforeEach(async({page})=> {
    loginpage= new loginPage(page);
    username=process.env.admin as string
    password= process.env.password as string
   await page.goto('/login');

  });
  
test('login with as valid credentials', async ({ page }) => {

await loginpage.login_with_valid_account(username,password)
await expect(page.getByRole('button', { name: 'Profile' }).first()).toBeVisible()
await page.pause()
});

});

 