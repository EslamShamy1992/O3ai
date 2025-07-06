import { chromium } from 'playwright';

export default async function globalSetup() {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  await page.goto("https://devlean.o3ai.com/login");
  
  await page.getByPlaceholder('Email').fill("Admin2");
  await page.getByPlaceholder('Password').fill("987654");
  await page.getByRole('button',{name: 'Login'}).click()
  await page.waitForTimeout(2000); 
  // Save the authentication state (cookies, localStorage, etc.)
  await page.context().storageState({ path: 'auth.json' });

  browser.close()
}
