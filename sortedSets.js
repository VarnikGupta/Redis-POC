const { client } = require("./client");

async function addKey() {
  const res = await client.zadd("racer", 100, "a", 20, "b", 40, "c", 80, "d");
  console.log(res);
}

async function zRange() {
  const res = await client.zrange("racer", 0, -1);
  console.log(res);
}

async function zrank() {
  const res = await client.zrank("rank", "d");
  console.log(res);
}

// addKey();
// zRange();
zrank();
