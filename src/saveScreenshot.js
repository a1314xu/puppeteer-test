/**
 * 在无头浏览器中将一个网页截图保存为图片
 */

const puppeteer = require('puppeteer');

const saveScreenshot = async (url, path) => {

    // 启动浏览器
    const browser = await puppeteer.launch({headless: false, args: [ '--disable-setuid-sandbox',  '--proxy-server=127.0.0.1:1235' ]});
    // 打开页面
    const page = await browser.newPage();
    // 设置浏览器视窗
    page.setViewport({
        width: 1376,
        height: 3068,
    }); 
    // 地址栏输入网页地址
    await page.goto(url);
    await page.waitForSelector('.js-username-field')
    await page.type('.js-username-field', '635157329@qq.com', {delay: 100});
    await page.type('.js-password-field', 'imissyou.123', {delay: 100});
    
    await page.click('button.submit')
    await page.waitForNavigation({ waitUntil: 'load' });
    if (page.url() === 'https://twitter.com/'){
        
    } else {
        await page.type('#challenge_response', '635157329@qq.com', {delay: 100});
        await page.click('#email_challenge_submit');
        await page.waitForNavigation({ waitUntil: 'load' });
    }
    // 截图: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagescreenshotoptions
    await page.screenshot({ path });
    // 关闭浏览器
    await browser.close();
};

module.exports = saveScreenshot;
