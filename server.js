import jsonServer from "json-server";

// 創建 json-server 實例

const server = jsonServer.create();
import router from "db/db.json";

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

server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
