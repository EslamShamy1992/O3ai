import {Page,Locator} from '@playwright/test'


export class BasePage{
    protected page:Page;

    constructor(page:Page){
        this.page=page;
    }

    // if select tag
      async selectDropdownByLabel(dropdown: Locator, label: string) {
    await dropdown.selectOption({ label });
  }

  // if div 
      async selectDropdownOption(dropdown: Locator, optionText: string) {
        await dropdown.click();
        await this.page.getByText(optionText, { exact: true }).first().click();
      }



}