
import { BasePage } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";

export class oeeDashboardPage extends BasePage {
  private startDatePicker: Locator;
  private startOkButton: Locator;
  private endDatePicker: Locator;
  private PrevMonthButton: Locator;
  private endOkButton: Locator;
  private applyFilterButton: Locator;
  private resultText: Locator;
  private PrevyearButton:Locator;

  constructor(page: Page) {
    super(page);
    this.startDatePicker = page.locator('#startPicker div').first();
    this.startOkButton = page.getByRole('button', { name: 'Ok' });

    this.endDatePicker = page.locator('#endPicker div').first();
    this.PrevMonthButton = page.getByRole('button', { name: 'Previous month (PageUp)' });
    this.endOkButton = page.getByRole('button', { name: 'Ok' });

    this.applyFilterButton = page.locator('div')
      .filter({ hasText: /^PreformsLine \*PET001Unit \*Start DateEnd DateCSLS1D1W1M$/ })
      .getByRole('button');

    this.resultText = page.getByText('95 %');
    this.PrevyearButton=page.getByRole('button', { name: 'Last year (Control + left)' })
  }

  // Dynamic locator methods
  private getStartDateLocator(date: string): Locator {
    return this.page.getByTitle(date).locator('div');
  }

  private getEndDateLocator(date: string): Locator {
    return this.page.getByTitle(date).locator('div');
  }

  async filterWithDays(startDate: string, endDate: string) {
    await this.startDatePicker.click();
    await this.PrevMonthButton.click();
    await this.getStartDateLocator(startDate).click();
    await this.startOkButton.click();
    await this.endDatePicker.click();
    await this.PrevMonthButton.last().click();
    await this.getEndDateLocator(endDate).click();
    await this.endOkButton.click();

    await this.applyFilterButton.click();
  }


async filterWithyears(startDate:string,endDate:string){
await this.startDatePicker.click();
await this.PrevyearButton.click();
await this.getStartDateLocator(startDate).click();
await this.startOkButton.click();
 await this.endDatePicker.click();
 await this.getEndDateLocator(endDate).click();
  await this.endOkButton.click();
 await this.applyFilterButton.click();


}

async filterWithMonths(startDate:string,endDate:string){

 await this.startDatePicker.click();
    await this.PrevMonthButton.click();
    await this.page.waitForTimeout(2000)
     await this.PrevMonthButton.click();
    await this.getStartDateLocator(startDate).click();
    await this.startOkButton.click();
    await this.endDatePicker.click();
    await this.getEndDateLocator(endDate).click();
    await this.endOkButton.click();

    await this.applyFilterButton.click();

}
  async isAvailabilitypercentageDisplayed() {
    await this.page.waitForTimeout(5000);
    return await this.resultText.isVisible();
  }

  async isOEEpercentageIsdisplayedCorrectly(){

    await this.page.waitForTimeout(9000);
    return await this.page.getByText('39 %').isVisible()
  }

  async shutdownHoursIsdisplayedCorrectly(){

    return await this.page.getByText('In Hrs: 573.15').isVisible();
  }

}





















