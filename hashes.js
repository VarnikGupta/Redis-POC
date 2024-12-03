const { client } = require("./client");

// max size -> 2^32 -1

//overrides if hash exists otherwise creates one
//returns the number of keys of the hash
async function setKeysOfMap() {
  const res = await client.hset("bike:1", {
    modal: "abc",
    brand: "xyz",
    type: "bike",
    price: 4972,
  });
  console.log(res);
}

async function getKeysOfMap() {
  const res = await client.hget("bike:1", "modal");
  console.log(res);
}

//if key does not exist then it shows null
async function getMultiple() {
  const res = await client.hmget("bike:1", "modal", "vbrand");
  console.log(res);
}

async function increment() {
  const res = await client.hincrby("bike:1", "price", 10);
  console.log(res);
}

//if key does not exist then no operation is performed and 0 is returned otherwise number of fields that are removed from the hash
async function deletekey() {
  const res = await client.hdel("bike:1", "type");
  console.log(res);
}

async function exists() {
  const res = await client.hexists("bike:1", "brand");
  console.log(res);
}

async function getAll() {
  const res = await client.hgetall("bike:1");
  console.log(res);
}

async function getAllKeys() {
  const res = await client.hkeys("bike:1");
  console.log(res);
}

async function hlen() {
  const res = await client.hlen("bike:1");
  console.log(res);
}

//  HEXPIRE
// -> sets an expiration on one or more fields
// -> sets time in seconds
// -> Additional parameters
//   1. nx -> set the expiration only when the field has no expiration
//   2. xx -> set the expiration only when the field has an expiration
//   3. gt -> new expiration timer > old expiration timer
//   4. lt -> new expiration timer < old expiration timer
//  return -2 if no such key exists
//  return 1 if expiration timer is set

//HEXPIREAT
// -> same as HEXPIRE
// -> in hexpire, the time is given in ttl seconds
// -> in hexpireat, the time is given in epoch time, if less than curr time, then field deleted immediately.
// -> time specified in seconds

//HEXPIRETIME
// -> returns the unix epoch expiration time stamp in seconds

// HPERSIST
// -> removes the expiration time on the keys of the hashmap
// -> returns -2 if no field exists
// -> returns -1 if expiration time is not present
// -> return 1 if expiration is removed

// HPEXPIRE
// -> hexpire - seconds
// -> hpexpire - milliseconds

// HPEXPIREAT
// -> hexpireat - seconds
// -> hpexpireat - milliseconds

// HPEXPIRETIME
// -> hexpiretime - seconds
// -> hpexpiretime - milliseconds

// HTTL
// -> returns the time to live in seconds

// HPTTL
// -> returns the time to live in milliseconds

//key, cursor, count, match, no values -> parameters
async function hscan() {
  const res = await client.hscan("bike:1", 0);
  console.log(res);
}

async function hsetnx() {
  const res = await client.hsetnx("bike:1", "type", "bike");
  console.log(res);
}

//returns the string length of the field value
async function hstrlen() {
  const res = await client.hstrlen("bike:1", "brand");
  console.log(res);
}

//returns the values
async function hvals() {
  const res = await client.hvals("bike:1");
  console.log(res);
}

// setKeysOfMap();
// getKeysOfMap();
// getMultiple();
// increment();
// deletekey();
// exists();
// getAll();
// getAllKeys();
// hlen();
// hscan();
// hsetnx();
// hstrlen();
hvals();
