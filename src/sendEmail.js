const nodemailer = require('nodemailer');
const path = require('path');
// 开启一个 SMTP 连接池
let transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    secureConnection: true, // use SSL
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: '18355552758@163.com',
        pass: 'imissyou.123' // QQ邮箱需要使用授权码
    }
});
const imgPath1 = path.join(__dirname, 'pic1.png');
const imgPath2 = path.join(__dirname, 'pic2.png');
// 设置邮件内容（谁发送什么给谁）
let mailOptions = {
    from: '"叹希奇" <18355552758@163.com>', // 发件人
    to: '635157329@qq.com', // 收件人
    cc: 'englishlearner94@gmail.com',
    subject: 'Hello ✔', // 主题
    text: '这是一封来自未来的测试邮件', // plain text body
    html: '<b>这是一封来自未来的测试邮件</b><img src="cid:img1" id="img1"><img src="cid:img2" id="img2">', // html body
    // 下面是发送附件，不需要就注释掉
    attachments: [
        {
            filename: '截图1.png',
            cid: 'img1',
            path: imgPath1
        },
        {
            filename: '截图2.png',
            cid: 'img2',
            path: imgPath2
        }]
};

const sendMail = () => {
    // 使用先前创建的传输器的 sendMail 方法传递消息对象
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(`Message: ${info.messageId}`);
        console.log(`sent: ${info.response}`);
    });
}
module.exports = sendMail;
