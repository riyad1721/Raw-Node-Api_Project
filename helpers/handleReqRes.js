//Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');


// app object - module scaffolding
const handler = {};
handler.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedpath = path.replace(/^\/+|\/$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        //response handle
        res.end('Hello world');
    });

};
module.exports = handler;