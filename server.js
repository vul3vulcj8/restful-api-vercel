import * as jsonServer from "json-server";
import * as cors from "cors";

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
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("JSON Server is runningon port ${port}`");
});

module.exports = server;
