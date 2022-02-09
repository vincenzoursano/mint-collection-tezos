const puppeteer = require('puppeteer-core');

(async () => {
  const WEBSITE_NAME = "www.google.it"

  const browserURL = 'http://127.0.0.1:9222';
  const browser = await puppeteer.connect({ browserURL, defaultViewport: null });

  const targets = await browser.targets()

  const target = await targets.find(t => {
    return t._targetInfo.url.includes(WEBSITE_NAME)
  })

  const page = await target.page();

  console.log({ page })

})();