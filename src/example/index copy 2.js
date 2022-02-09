const puppeteer = require('puppeteer');

(async () => {
  const browserURL = 'http://127.0.0.1:9222';
  const browser = await puppeteer.connect({ browserURL, defaultViewport: null });

  // let pages = await browser.pages();
  // console.log({ browser, page: pages[0] })

  const page = await browser.newPage();
  await page.goto('https://rarible.com/create/tezos-mt');

  // await page.click('selector-of-submit-button');
  // const btn = await page.waitForSelector('#create-main', {visible: true});
  // btn.click();

  const fileInput = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[1]/div[2]/div/input');
  await fileInput.uploadFile('assets/test2.webp');

  const priceInput = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[4]/div/div[2]/div[1]/input', { visible: true })
  await priceInput.type('10');

  const nameInput = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[8]/div/div[2]/div/input')
  await nameInput.type('Color 1/10');

  // const descriptionInput = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[9]/div/div[2]/div/textarea')
  // await descriptionInput.type('Calaveras. Rarity: Common');

  // const royaltiesInput = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[10]/div/div[1]/div[2]/div[1]/input')
  // await royaltiesInput.type('11');

  const numberCopiesInput = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[10]/div/div[2]/div[2]/div/input')
  await numberCopiesInput.type('1');

  const showAdvancedSettingsBtn = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[11]/button')
  await showAdvancedSettingsBtn.click();

  const propertyNameInput = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[11]/div/div[1]/div[2]/div[1]/div/input')
  await propertyNameInput.type('Rarity');

  const propertyValueInput = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[11]/div/div[1]/div[2]/div[2]/div/input')
  await propertyValueInput.type('Common');

  const createItemBtn = await page.waitForXPath('//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/div/div/div/div[1]/div[12]/div/div/button')
  await createItemBtn.click();

  //*[@id="root"]/div/div/div[3]/div[2]/button

  //*[@id="root"]/div/div/div[3]/div[2]/button

  //*[@id="root"]/div/div/div[3]/div[2]/button

})();