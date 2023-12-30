const jsonServer = require("json-server");
const server = jsonServer.create();
const axios = require("axios");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

// Add delay middleware with 1500ms delay
server.use(jsonServer.delay(1500));

server.use(middlewares);

// Custom route to forward requests to the remote API
server.use("/api", async (req, res) => {
  try {
    // Forward the request to the remote API
    const response = await axios.get(
      `https://restful-api-vercel-eta.vercel.app${req.url}`
    );

    // Send the remote API response to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors if necessary
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
