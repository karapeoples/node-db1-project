const server = require("./api/server.js");

const PORT = process.env.PORT || 4994;

server.listen(PORT, () => {
  console.log(`\n*^^* ~~API ALIVE ON PORT ${PORT}~~ *^^*\n`);
});
