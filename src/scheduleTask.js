const schedule = require('node-schedule');
const saveScreenshot = require('./saveScreenshot');
const sendEmail = require('./sendEmail');
const scheduleTask = () => {
    schedule.scheduleJob('0 0 16 * * *', async () => {
        await saveScreenshot('https://studiofow.com', './src/google.png');
        sendEmail();
        console.log('scheduleCronstyle:' + new Date());
    });
}
module.exports = scheduleTask;
