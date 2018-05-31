const schedule = require('node-schedule');
const saveScreenshot = require('./saveScreenshot');
const sendEmail = require('./sendEmail');
const scheduleTask = async() => {
    schedule.scheduleJob('0 30 17 * * *', async () => {
        await saveScreenshot('https://twitter.com/login', ['./src/pic1.png', './src/pic2.png']);
        sendEmail();
        console.log('定时计划时间:' + new Date());
    });
}
module.exports = scheduleTask;
