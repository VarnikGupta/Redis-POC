const { connectRedis } = require("../client");

connectRedis().then((client) => {
  // publish(client);
  doChanges(client);
});

async function publish(client) {
  const resp = await client.publish("compro", "hii all");
  console.log(resp);
}

async function doChanges(client) {
  const res = await client.zAdd("tokens:suzes", [
    { score: 100, value: "a" },
    { score: 20, value: "b" },
    { score: 40, value: "c" },
    { score: 80, value: "pl" },
  ]);
  console.log(res);
}
