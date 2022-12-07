/** @format */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('config.json');
const middlewares = jsonServer.defaults();

// config.json usuario, password cifrados con SHA256
server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running');
});
