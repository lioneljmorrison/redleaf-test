import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getDashboardElement() {
    return element(by.css('app-root app-dashboard-layout'));
  }
}
