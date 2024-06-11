const {test, expect} = require('@playwright/test');

test('First Test Case', async({page}) => {

    await page.goto("https://google.com");
    await page.title("Google");
    await expect (page).toHaveTitle('Google')

})