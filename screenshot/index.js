const puppeteer = require('puppeteer');

module.exports = async function (context, req) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://azure.microsoft.com/en-ca/services/functions/');
    const screenshotBuffer = await page.screenshot({
        fullPage: true
    });

    await browser.close();

    context.res = {
        body: screenshotBuffer,
        headers: {
            "content-type": "image/png"
        }
    };
};