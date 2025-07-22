import { BasePage } from "./BasePage";
import { Page,Locator } from "@playwright/test";



export class homePage extends BasePage {
 
  private homeLink: Locator;
    private productivityManagementLink: Locator;
    private OEEsnowflakeDashboard:Locator;
      private oeeDashboardLink: Locator;




    constructor(page:Page){
        super(page)


            this.homeLink = page.getByText('homeHome');
            this.productivityManagementLink = page.getByRole('link', { name: 'Productivity Management' });
           this.OEEsnowflakeDashboard= this.page.getByRole('link', { name: 'OEE Dashboard SNW OEE' })
               this.oeeDashboardLink = page.getByRole('link', { name: 'OEE Dashboard OEE Dashboard' });




    }


    async clickhomeIcon(){

        await this.homeLink.click()
    }

    async clickOnProductivityManagement(){

        await this.productivityManagementLink.click()
    }

    async clickOEEsnowflakeDashboard(){

        await this.OEEsnowflakeDashboard.click()
    }

    async clickoeeDashboard(){

        await this.oeeDashboardLink.click()
    }

}