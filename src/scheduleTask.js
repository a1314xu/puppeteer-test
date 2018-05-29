const schedule = require('node-schedule');
const saveScreenshot = require('./saveScreenshot');
const sendEmail = require('./sendEmail');
const scheduleTask = () => {
    schedule.scheduleJob('0 * * * * *', async () => {
        await saveScreenshot('https://google.com', './src/google.png');
        sendEmail();
        console.log('scheduleCronstyle:' + new Date());
    });
}
module.exports = scheduleTask;
