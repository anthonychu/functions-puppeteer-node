const puppeteer = require('puppeteer');

module.exports = async function (context, req) {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox"]
    });
    const page = await browser.newPage();
    await page.setViewport({
        width : 1024,
        height : 800
    });
    await page.goto('https://azure.microsoft.com/services/functions/');
    const screenshotBuffer = await page.screenshot({
        fullPage: false
    });

    await browser.close();

    context.res = {
        body: screenshotBuffer,
        headers: {
            "content-type": "image/png"
        }
    };
};
