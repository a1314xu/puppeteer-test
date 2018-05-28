const scheduleTask = require('./src/scheduleTask');
const http = require('http');
const runApp = () => {
    scheduleTask();
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('hellO world!')
    }).listen(3000);
    console.log('server running on http://118.24.119.37');
}

runApp();

