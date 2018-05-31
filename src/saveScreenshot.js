/**
 * 在无头浏览器中将一个网页截图保存为图片
 */

const puppeteer = require('puppeteer');

const saveScreenshot = async (url, path) => {

    // 启动浏览器
    const browser = await puppeteer.launch({args: [ '--no-sandbox', '--disable-setuid-sandbox',  '--proxy-server=127.0.0.1:1235' ]});
    // 打开页面
    const page = await browser.newPage();
    // 设置浏览器视窗
    page.setViewport({
        width: 1376,
        height: 5068,
    }); 
    // 地址栏输入网页地址
    await page.goto(url);
    await page.waitForSelector('.js-username-field')
    await page.type('.js-username-field', '635157329@qq.com', {delay: 100});
    await page.type('.js-password-field', 'imissyou.123', {delay: 100});
    
    await page.click('button.submit')
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    if (page.url() === 'https://twitter.com/'){

    } else {
        await page.type('#challenge_response', '635157329@qq.com', {delay: 100});
        await page.click('#email_challenge_submit');
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
    }
    const path1 = path[0], path2 = path[1];
    
    await page.screenshot({ path: path1 });
    await page.goto('https://twitter.com/NN711_1');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    await page.waitFor(3000);
    await page.screenshot({ path: path2 });
    // 关闭浏览器
    await browser.close();
};

module.exports = saveScreenshot;
