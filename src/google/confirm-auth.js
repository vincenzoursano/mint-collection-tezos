import { delay } from "../utils";
import { AUTH_URL_GOOGLE } from "../env";

/**
 * GOOGLE - All times confirm new auth request
 * @param browser - puppeteer browser instance
 */
const confirmAuthGoogle = async (browser) => {
  while (true) {
    const pages = await browser.pages();

    const pageGoogleRequest = pages.find((page) =>
      page.url().includes(AUTH_URL_GOOGLE)
    );

    if (pageGoogleRequest) {
      await pageGoogleRequest.bringToFront();
      console.log({ pageGoogleRequest });
      const confirmBtn = await pageGoogleRequest.waitForXPath(
        '//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div/ul/li[1]/div'
      );
      await confirmBtn.click();
    }

    await delay(2000);
  }
};

export { confirmAuthGoogle };
