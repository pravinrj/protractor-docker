
describe('Login Bnext site', function() {
 it('should Login to Bnext site', function() {

 var data=require("./testdata.json");  // read data from json file
browser.get(data.Url);  // open link on browser
browser.driver.manage().window().setSize(1600, 800);  // maximize browser window
browser.driver.sleep(3000);

element(by.id('username')).sendKeys(data.UserName);  // enter username
browser.driver.sleep(3000);

element(by.model('login.password')).sendKeys(data.Password); // enter password
browser.driver.sleep(3000);

var loginBtn = element(by.css('[value="login"]')).getAttribute('value');


expect(loginBtn).toBe('login');
expect(loginBtn.isEnabled()).toBe(true);
expect(loginBtn.isDisplayed()).toBe(true);
browser.driver.sleep(5000);

browser.executeScript("arguments[0].click();", loginBtn);  //click on login button
browser.driver.sleep(5000);
expect(browser.getCurrentUrl()).toBe('http://blubox.shoppinpal.com/seller/sell/products');  // Verify url after login successful
//browser.refresh();
browser.driver.sleep(8000);
element(by.css("#logoutButton > i")).click();  // Click on logout button
browser.driver.sleep(3000);                  
element(by.css('#logoutModal > div.modal-footer > a.modal-action.modal-close.waves-effect.waves-green.btn')).click();  // Click on confirm logot button
browser.driver.sleep(3000);                  

  });
});