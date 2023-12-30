// JSON Server module
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db/db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use((_req, res, next) => {
  res.set("Cache-Control", "no-store");
  setTimeout(next, 1500);
});
const basePath = "/IG-works";
server.use(basePath, middlewares);
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    [`${basePath}/api/*`]: "/$1",
  })
);

server.use(router);
// Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
