const { connectRedis } = require("../client");

connectRedis().then((client) => {
  // publish(client);
  doChanges(client,"tech:1","redis");
});

async function publish(client) {
  const resp = await client.publish("compro", "hii all");
  console.log(resp);
}

async function doChanges(client,key,value) {
  // const res = await client.zAdd("tokens:suzes", [
  //   { score: 100, value: "a" },
  //   { score: 20, value: "b" },
  //   { score: 40, value: "c" },
  //   { score: 80, value: "pl" },
  // ]);
  await client.set(key, value);
  await client.set(key+":copy", "");
  // if (res) {
    await client.expire(key+":copy", 10);
  // }
  // console.log(res);
}
