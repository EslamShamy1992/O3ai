import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { SemanticModelPage } from '../pages/semanticModelPage';

let loginpage:loginPage;
let semanticmodelpage:SemanticModelPage;
let username:string,
password:string;
test.describe('Semantic TestCases', async () => {

  test.beforeEach(async({page})=> {
     loginpage= new loginPage(page);
     semanticmodelpage= new SemanticModelPage(page);
       username='Admin2'
       password='987654'
    await page.goto('https://semantic-o3-core-angular.azurewebsites.net/login')
  });


  test('check OEE dashboard',async({page})=>{

    await loginpage.login_with_valid_account(username,password)
    await semanticmodelpage.filterWithDays()
     // assert that 95% is displayed after 5econds for availabitlity chart
     expect(await semanticmodelpage.isAvailabilitypercentageDisplayed()).toBeTruthy()

  })

  test('check OEE dashboard- snowflake',async({page})=>{

 await loginpage.login_with_valid_account(username,password)
 await semanticmodelpage.filterwithdays_snowflake()
  // assert that 95% is displayed after 5econds for availabitlity chart
 expect(await semanticmodelpage.isAvailabilitypercentageDisplayed()).toBeTruthy()
 

  });





















});