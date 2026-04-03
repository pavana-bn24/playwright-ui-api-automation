class AutomationPage {
  constructor(page) {
    this.page = page;
    this.automationMenu = page.locator('text=Automation');
    this.createBtn = page.locator('text=Create');
    this.taskBot = page.locator('text=Task Bot');
    this.form = page.locator('text=Form');
    this.saveBtn = page.locator('text=Save');
  }

  async openAutomation() {
    await this.automationMenu.click();
  }

  async createTaskBot() {
    await this.createBtn.click();
    await this.taskBot.click();
  }

  async createForm() {
    await this.createBtn.click();
    await this.form.click();
  }

  async save() {
    await this.saveBtn.click();
  }
}

module.exports = AutomationPage;
