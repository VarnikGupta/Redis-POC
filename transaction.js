const { connectRedis } = require("./client");

connectRedis().then(async (client) => {
  const watch = await client.watch("txn");
  console.log(watch);
  await client.lPush("txn", "three");
  const res = await client
    .multi()
    .lPush("txn", "one")
    .lPush("txn", "two")
    .lPop("txn")
    .exec();
  console.log(res);
});
