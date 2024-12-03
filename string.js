const { client } = require("./client");

// max size -> 512 MB

async function setSingleKey(key, value) {
  let res = await client.set(key, value);
  console.log(res);
}

async function getSingleKey(key) {
  const res = await client.get(key);
  console.log(res);
}

async function setIfKeyNotExist(key, value) {
  let res = await client.set(key, value, "NX");
  console.log(res);
}

async function setIfKeyExist(key, value) {
  let res = await client.set(key, value, "XX");
  console.log(res);
}

async function setMultiple(arr) {
  let res = await client.mset(...arr);
  console.log(res);
}

async function getMultiple(arr) {
  const res = await client.mget(arr);
  console.log(res);
}

async function increment() {
  const res1 = await client.set("crash", 0);
  console.log(res1);
  const res2 = await client.get("crash");
  console.log("value before increment", res2);
  const res3 = await client.incr("crash");
  console.log("value after increment", res3);
}

async function incrementBy() {
  const res1 = await client.set("crash", 0);
  console.log(res1);
  const res2 = await client.get("crash");
  console.log("value before increment", res2);
  const res3 = await client.incrby("crash", 10);
  console.log("value after increment", res3);
}

async function decrement() {
  const res1 = await client.set("crash", 0);
  console.log(res1);
  const res2 = await client.get("crash");
  console.log("value before decrement", res2);
  const res3 = await client.decr("crash");
  console.log("value after decrement", res3);
}

async function decrementBy() {
  const res1 = await client.set("crash", 0);
  console.log(res1);
  const res2 = await client.get("crash");
  console.log("value before decrement", res2);
  const res3 = await client.decrby("crash", 10);
  console.log("value after decrement", res3);
}

async function getRange() {
  const res = await client.getrange("user:1", 1, 2);
  console.log(res);
}

async function getSet() {
  const res = await client.getset("user:1", "vaarnik");
  console.log(res);
}

async function setWithExpiry() {
  const res = await client.setex("user:1", 10, "aaaaa");
  console.log(res);
}

// setSingleKey("user:1", "varnik");
getSingleKey("user:1");
// setIfKeyNotExist("user:1", "abc");
// setIfKeyExist("user:1", "abc");
// setMultiple([
//   ["user:1", "varnik"],
//   ["user:2", "abc"],
//   ["user:3", "xyz"],
//   ["user:4", "vaarnik"],
// ]);
// getMultiple(["user:1", "user:2", "user:3", "user:4", "user:5"]);
// increment();
// incrementBy();
// decrement();
// decrementBy();
// getRange();
// getSet();
// setWithExpiry();
