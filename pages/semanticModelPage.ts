import { BasePage } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";

export class SemanticModelPage extends BasePage {
  private homeLink: Locator;
  private productivityManagementLink: Locator;
  private oeeDashboardLink: Locator;
  private startDatePicker: Locator;
  private startPrevMonthButton: Locator;
  private startDate: Locator;
  private startOkButton: Locator;
  private endDatePicker: Locator;
  private endPrevMonthButton: Locator;
  private endDate: Locator;
  private endOkButton: Locator;
  private applyFilterButton: Locator;
  private resultText: Locator;

  constructor(page: Page) {
    super(page);
    this.homeLink = page.getByText('homeHome');
    this.productivityManagementLink = page.getByRole('link', { name: 'Productivity Management' });
    this.oeeDashboardLink = page.getByRole('link', { name: 'OEE Dashboard OEE Dashboard' });
    this.startDatePicker = page.locator('#startPicker div').first();
    this.startPrevMonthButton = page.getByRole('button', { name: 'Previous month (PageUp)' });
    this.startDate = page.getByTitle('6/1/').locator('div');
    this.startOkButton = page.getByRole('button', { name: 'Ok' });
    this.endDatePicker = page.locator('#endPicker div').first();
    this.endPrevMonthButton = page.getByRole('button', { name: 'Previous month (PageUp)' });
    this.endDate = page.getByTitle('6/5/').locator('div');
    this.endOkButton = page.getByRole('button', { name: 'Ok' });
    this.applyFilterButton = page.locator('div')
      .filter({ hasText: /^PreformsLine \*PET001Unit \*Start DateEnd DateCSLS1D1W1M$/ })
      .getByRole('button');
    this.resultText = page.getByText('95 %');
  }

  async filterWithDays() {
    await this.homeLink.click();
    await this.productivityManagementLink.click();
    await this.oeeDashboardLink.click();

    await this.startDatePicker.click();
    await this.startPrevMonthButton.click();
    await this.startDate.click();
    await this.startOkButton.click();

    await this.endDatePicker.click();
    await this.endPrevMonthButton.last().click();
    await this.endDate.click();
    await this.endOkButton.click();

    await this.applyFilterButton.click();
  }


  async isAvailabilitypercentageDisplayed(){

    await this.page.waitForTimeout(5000)
    return await this.resultText.isVisible()
  }
  async filterwithdays_snowflake(){

  await this.homeLink.click();
    await this.productivityManagementLink.click();
    await this.page.getByRole('link', { name: 'OEE Dashboard SNW OEE' }).click()
      await this.startDatePicker.click();
    await this.startPrevMonthButton.click();
    await this.startDate.click();
    await this.startOkButton.click();

    await this.endDatePicker.click();
    await this.endPrevMonthButton.last().click();
    await this.endDate.click();
    await this.endOkButton.click();

    await this.applyFilterButton.click();
  }
}
