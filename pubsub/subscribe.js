const { connectRedis } = require("../client");

connectRedis().then((client) => {
  // subscribe(client);
  // keySpace(client);
  keyEvent(client);
});

async function subscribe(client) {
  await client.subscribe("compro", "api", (message) => {
    console.log(message);
  });
}

async function keySpace(client) {
  await client.pSubscribe(
    "__keyspace@0__:tokens:*",
    async (message, channel) => {
      console.log(`event >>> ${message} on ${channel}`);
    }
  );
}

async function keyEvent(client) {
  await client.pSubscribe(
    "__keyevent@0__:*",
    async (message, channel) => {
      console.log(`event >>> ${message} on ${channel}`);
    }
  );
}
