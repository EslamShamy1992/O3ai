import { test, expect } from '@playwright/test';
import { materialConsumptionPage } from '../pages/materialConsumptionPage';


let mcpage:materialConsumptionPage;
test.describe('Material Consumption - SFDC Configuration', () => {
  
  test.beforeEach(async ({ page }) => {
    // mcpage= new materialConsumptionPage(page);  
   await page.goto('/Home/SFDCConfiguration'); 

  });

  test.only('should create new material consumption record', async ({page}) => {

    await page.getByText('Smart Factory Group').click()
        await page.pause()


  });















    });