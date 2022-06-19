const puppeteer = require('puppeteer');

const testCreateUserButton = async () => {
  // Step 1 - Launch Puppeteer and assign response to the browser variable
  let browser = await puppeteer.launch();

  // Step 2 - Using the browser variable, create a new page and assign the response to the page variable
  let page = await browser.newPage();

  // Step 3 - Using the page variable goto the correct URL that the React app is running on
  await page.goto("http://localhost:3000/addUser.html");

  // Step 4 - Using the page variable, use the click method by passing the ".create-user" class name
  await page.click('#addUser');

  // Step 5 - Using the page variable, use the screenshot method to generate a screenshot of the React app with the newly created user
  await page.screenshot({path: 'screen.png'});
};

module.exports = testCreateUserButton;
