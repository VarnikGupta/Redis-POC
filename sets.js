const { client } = require("./client");

//max size -> 2^32 -1

async function addSet() {
  const res = await client.sadd("key", [1, 2, 5]);
  console.log(res);
}

//0 if key does not exist
async function cardinality() {
  const res = await client.scard("key");
  console.log(res);
}

async function setDifference() {
  const res = await client.sdiff("key", "key2", "key1");
  console.log(res);
}

//same as setDiff instead store the result in destination
async function setDifferenceStore() {
  const res = await client.sdiffstore("res", "key", "key1");
  console.log(res);
}

//returns the intersection ele of sets
async function intersection() {
  const res = await client.sinter("res", "key", "key2");
  console.log(res);
}

//returns the cardinality of the intersection result of the sets
//also have an option for limit if it intersection cardinalityvreaches limit it exists with limit as result
//version issue
async function interCard() {
  const res = await client.sintercard(2, "key", "key2");
  console.log(res);
}

async function interstore() {
  const res = await client.sinterstore("inter", "key", "key2", "res");
  console.log(res);
}

async function isMember() {
  const res = await client.sismember("inter", 4);
  console.log(res);
}

async function allMembers() {
  const res = await client.smembers("key");
  console.log(res);
}

//tells whether each value is a member of the set of not
//version issue
async function smIsMember() {
  const res = await client.smismember("key", 1, 2, 3);
  console.log(res);
}

//moves key from source to destination
async function sMove() {
  const res = await client.smove("key", "inter", 5);
  console.log(res);
}

//pops randomly
async function sPop() {
  const res = await client.spop("inter", 2);
  console.log(res);
}

//removes the specified ele
async function sRem() {
  const res = await client.srem("key2", 4);
  console.log(res);
}

async function union() {
  const res = await client.sunion("key", "key1");
  console.log(res);
}

async function unionStore() {
  const res = await client.sunionstore("union", "key", "key1");
  console.log(res);
}

async function setExpiration() {
  const res = await client.expire("inter", 10);
  console.log(res);
}

async function setx() {
  const res = await client.setex("name", 10, "compro");
  console.log(res);
}

async function ttl() {
  const res = await client.ttl("name");
  console.log(res);
}
// setExpiration();
// setx();
ttl();
// addSet();
// cardinality();
// setDifference();
// setDifferenceStore();
// intersection();
// interCard();
// interstore();
// isMember();
// allMembers();
// smIsMember();
// sMove();
// sPop();
// sRem();
// union();
// unionStore();
