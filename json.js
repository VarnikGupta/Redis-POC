const { connectRedis } = require("./client");

connectRedis().then(async (client) => {
  // await setJson(client);
  // await getJson(client);
  // await type(client);
  //   await incrBy(client);
});

async function setJson(client) {
  const res = await client.json.set(
    "user:1001",
    "$",
    '{"name": "Alice", "age": 30, "skills": ["Redis", "Python"]}'
  );
  console.log(res);
}

async function getJson(client) {
  const res2 = await client.json.get("user:1001", "name");
  console.log(res2);
}

async function type(client) {
  const res3 = await client.json.type("user:1001", "$");
  console.log(res3);
}


async function incrBy(client) {
  const res7 = await client.json.set("crashes", "$", 0);
  console.log(res7);

  const res8 = await client.json.numIncrBy("crashes", "$", 1);
  console.log(res8);

  const res9 = await client.json.numIncrBy("crashes", "$", 1.5);
  console.log(res9);

  const res10 = await client.json.numIncrBy("crashes", "$", -0.75);
  console.log(res10);
}

