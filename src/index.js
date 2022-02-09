import puppeteer from "puppeteer-core";
import { uploadItems } from "./objkt";
import { confirmTransactions } from "./kukai";
import { confirmAuthGoogle } from "./google";
import { BROWSER_URL } from "./env";

/**
 * Main
 */
(async () => {
  // Boot puppeteer browser instance
  const browser = await puppeteer.connect({
    browserURL: BROWSER_URL,
    defaultViewport: null,
    slowMo: 20,
  });
  // Objkt
  uploadItems(browser);
  // Kukai
  confirmTransactions(browser);
  // confirmAuthGoogle(browser);
})();
