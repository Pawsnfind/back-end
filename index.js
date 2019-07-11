const server = require('./api/server.js');

const port = process.env.PORT||3300;

server.listen(port, () => {
    console.log(`API started to listen at ${port}`)
});