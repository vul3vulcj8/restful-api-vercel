import jsonServer from "json-server";
import cors from "cors";
// 創建 json-server 實例

const server = jsonServer.create();
import router from "db/db.json";

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

server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
