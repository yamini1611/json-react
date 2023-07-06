const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("blog.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // Chose port from here like 8080, 3001 etc

server.use(middlewares);
server.use(router);

server.listen(port);