import fs from "fs";
import path from "path";
import { delay } from "../utils";
import { PAGE_URL_OBJKT_MINT, PATH_ASSETS, EXTENSIONS_ITEM } from "../env";

/**
 *  OBJKT - Upload all imgs inside assets folder
 * @param browser - puppeteer browser instance
 */
const uploadItems = async (browser) => {
  console.log("OK: upload-items");

  const page = await browser.newPage();

  const items = await (
    await fs.promises.readdir(PATH_ASSETS)
  ).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return EXTENSIONS_ITEM.includes(ext);
  });

  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    await page.goto(PAGE_URL_OBJKT_MINT);
    await page.bringToFront();

    const fileInput = await page.waitForXPath(
      '//*[@id="main-file"]/app-upload/div/div/label/input'
    );
    await fileInput.uploadFile(`${PATH_ASSETS}${item}`);

    const { name } = path.parse(item);
    const form = {
      title: "DOTS #" + name,
      description:
        "Li4uLkRPVFMgYXJlIGEgbGltaXRlZCBjb2xsZWN0aW9uIG9mIDExMTEgdW5pcXVlIHBpZWNlcy4uLi4=",
      editions: "1",
      royalty: "15",
    };

    const titleInput = await page.waitForXPath(
      "/html/body/app-root/div[1]/div/app-mint/div/div/app-new-token/div/div/div[1]/form/label[1]/input"
    );
    await titleInput.type(form.title);

    const descriptionInput = await page.waitForXPath(
      "/html/body/app-root/div[1]/div/app-mint/div/div/app-new-token/div/div/div[1]/form/label[2]/textarea"
    );
    await descriptionInput.type(form.description);

    // TODO: If need add selectors Collection & License

    const editionsInput = await page.waitForXPath(
      "/html/body/app-root/div[1]/div/app-mint/div/div/app-new-token/div/div/div[1]/form/label[5]/input"
    );
    await editionsInput.type(form.editions);

    const royaltyInput = await page.waitForXPath(
      "/html/body/app-root/div[1]/div/app-mint/div/div/app-new-token/div/div/div[1]/form/label[6]/input"
    );
    await royaltyInput.type(form.royalty);

    const createItemBtn = await page.waitForXPath(
      "/html/body/app-root/div[1]/div/app-mint/div/div/app-new-token/div/div/div[1]/form/button"
    );
    await createItemBtn.click();

    await delay(20000);
  }
};

export { uploadItems };
