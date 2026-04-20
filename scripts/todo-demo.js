const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://demo.playwright.dev/todomvc', { waitUntil: 'networkidle' });
  const input = 'input[placeholder="What needs to be done?"]';
  await page.fill(input, 'Buy groceries');
  await page.press(input, 'Enter');
  await page.waitForSelector('li');
  const out = 'C:\\Users\\natha\\Desktop\\main\\Projects\\Landscaping\\frontend\\todo-demo.png';
  await page.screenshot({ path: out });
  console.log('Saved screenshot', out);
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });