// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
// Listen to port
server.listen(3004, () => {
  console.log("JSON Server is running on port 3004");
});

// Export the Server API
module.exports = server;
