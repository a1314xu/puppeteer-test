const schedule = require('node-schedule');
const saveScreenshot = require('./saveScreenshot');
const sendEmail = require('./sendEmail');
const scheduleTask = () => {
    schedule.scheduleJob('0 40 17 * * *', async () => {
        await saveScreenshot('https://twitter.com/login', './src/google.png');
        sendEmail();
        console.log('定时计划时间:' + new Date());
    });
}
module.exports = scheduleTask;
