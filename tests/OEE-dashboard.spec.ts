import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { oeeDashboardPage } from '../pages/oeeDashboardPage';
import { homePage } from '../pages/homePage';
import { config } from 'dotenv';
config();

let loginpage:loginPage;
let homepage:homePage;
let oeedashboard:oeeDashboardPage;
let username:string,
password:string;
test.describe('Semantic TestCases', async () => {
 
  test.beforeEach(async({page})=> {
     loginpage= new loginPage(page);
     homepage= new homePage(page);
     oeedashboard= new oeeDashboardPage(page);
       username=process.env.admin as string
       password= process.env.password as string
    await page.goto('/login')
  });




  test('check OEE dashboard with years',async({page})=>{

   await loginpage.login_with_valid_account(username,password);
   await homepage.clickhomeIcon();
   await homepage.clickOnProductivityManagement()
   await homepage.clickoeeDashboard()
   await oeedashboard.filterWithyears('7/1/2024', '7/1/2025');
   // assert that OEE chart is displayed with 39% after 9 seconds
   expect(await oeedashboard.isOEEpercentageIsdisplayedCorrectly()).toBeTruthy()
   await page.pause()
    

  })

    test('check OEE dashboard with months',async({page})=>{

   await loginpage.login_with_valid_account(username,password);
   await homepage.clickhomeIcon();
   await homepage.clickOnProductivityManagement()
   await homepage.clickoeeDashboard()
   await oeedashboard.filterWithMonths('5/1/2025', '7/1/2025')
   // assert shutdown is displayed with expected number
  expect(await oeedashboard.shutdownHoursIsdisplayedCorrectly()).toBeTruthy()
    await page.pause()

  })

    test('check OEE dashboard with days',async({page})=>{

   await loginpage.login_with_valid_account(username,password);
   await homepage.clickhomeIcon();
   await homepage.clickOnProductivityManagement()
   await homepage.clickoeeDashboard()
   await oeedashboard.filterWithDays('6/1/2025', '6/5/2025');
     // assert that 95% is displayed after 5econds for availabitlity chart
   expect(await oeedashboard.isAvailabilitypercentageDisplayed()).toBeTruthy();

  })























});