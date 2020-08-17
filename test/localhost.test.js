const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("localhost", async () => {
  await page.goto("http://localhost:3000/");
  await page.click('[data-test-id="about-link"]');
  await page.click('[data-test-id="about"]');
  const content = await page.textContent('[data-test-id="about"]');
  expect(content).toBe("About")
});