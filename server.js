const jsonServer = require("json-server");
const cors = require("cors"); // 引入 cors 中间件

const server = jsonServer.create();
const router = jsonServer.router("db/db.json");

const middlewares = jsonServer.defaults();

// 使用 cors 中间件
server.use(cors());

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);

server.listen(YourPort, () => {
  console.log(`Server is running on port ${YourPort}`);
});

module.exports = server;
