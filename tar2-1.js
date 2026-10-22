import { createServer } from 'node:http';
let count = 0;
const asks = []
const server = createServer((req, res) => {
    asks.push({ req: req.url, method: req.method })
    if (req.url === '/request' && req.method === 'GET') {
        count++;
        res.end(`the num that you entered is ${count} ${JSON.stringify(asks)}`);
    }
    else {
        res.end(`welcome to our sight! you did req ${req.url} to url ${req.method}`);

    }
});

server.listen(5050);
