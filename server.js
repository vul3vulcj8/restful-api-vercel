const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db/db.json");

const middlewares = jsonServer.defaults();

// 使用 cors 中间件
server.use(cors({ origin: "http://localhost:3000" }));

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);

server.listen(port, () => {
  console.log("JSON Server is runningon port ${port}`");
});

module.exports = server;
