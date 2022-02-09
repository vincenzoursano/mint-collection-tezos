import { PAGE_URL_KUKAI_ACCOUNT } from "../env";

/**
 * KUKAI - All times confirm transaction verification
 * @param browser - puppeteer browser instance
 */
const confirmTransactions = async (browser) => {
  console.log("OK: confirm-transactions");

  const page = await browser.newPage();
  await page.goto(PAGE_URL_KUKAI_ACCOUNT);

  while (true) {
    const confirmBtn = await page.waitForXPath(
      "/html/body/app-root/app-logged-in/app-uri-handler/app-send/app-confirm-send/div/div/div[2]/div[5]/button"
    );
    if (confirmBtn) {
      await page.bringToFront();
      await confirmBtn.click();
    }
  }
};

export { confirmTransactions };
