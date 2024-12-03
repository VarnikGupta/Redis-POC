const { client } = require("./client");

// max size -> 2^31 - 1

async function leftPush() {
  const res = await client.lpush("mssg", 1);
  console.log("len of the list is", res);
}

async function rightPush() {
  const res = await client.rpush("mssg", 2);
  console.log("len of the list is", res);
}

async function leftPop() {
  const res = await client.lpop("mssg");
  console.log("popped value is", res);
}

async function rightPop() {
  const res = await client.rpop("mssg");
  console.log("popped value is", res);
}

async function lenOfList() {
  const res = await client.llen("mssg");
  console.log("length of list:", res);
}

//fetches the list items in the given range
async function getList(start, end) {
  const res = await client.lrange("mssg", start, end);
  console.log(res);
}

//removes other elements apart from the one falling in range
async function trimList(start, end) {
  const res = await client.ltrim("mssg", start, end);
  console.log(res);
}

//blocks the pop operation for specified amount of time if the list is empty
async function blockingPop() {
  const res = await client.brpop("mssg", 10);
  console.log(res);
}

//keep only latest n items in the list
async function keepLatestN() {
  const push = await client.lpush("mssg", 1);
  console.log(push);
  const res = await client.ltrim("mssg", -3, -1);
  console.log(res);
}

//check the existence of the list
async function checkExistenceOfList() {
  const res = await client.exists("mssg");
  console.log(res);
}

async function elementAtIndex() {
  const res = await client.lindex("mssg", 1);
  console.log(res);
}

async function brPop() {
  const res = await client.brpop("mssg", 10);
  console.log(res);
}

//insert ele at head of the list if key exists
async function lpushx() {
  const res = await client.lpushx("mssg", 4);
  console.log(res);
}

//removes the count occureneces of the specified value from the list
// if count=0 removes all ele
// if count>0 from head to tail
// if count<0 from tail to head
async function lrem() {
  const res = await client.lrem("mssg", 1, 4);
  console.log(res);
}

//returns list length for successgul operation
// -1 if pivot not found
// 0 when key does not exist
async function linsert() {
  const res = await client.linsert("mssg", "BEFORE", 4, 5);
  console.log(res);
}

async function lset() {
  const res = await client.lset("mssg", 1, 7);
  console.log(res);
}

//if value not exists then nil is returned and no operation is performed
//version issue
async function lmove() {
  const res = await client.lmove("mssg", "mssgs", "LEFT", "RIGHT");
  console.log(res);
}

//blocking move
//version issue
async function blMove() {
  const res = await client.blmove("mssg", "mssgs", "LEFT", "RIGHT", 5);
  console.log(res);
}

//pops one or more element from the first non-empty list key. can also give count of keys to pop
//version issue
async function lmPop() {
  const res = await client.lmpop(2, ["mssg", "mssgs"], "LEFT");
  console.log(res);
}

//blocking pop
async function blPop() {
  const res = await client.blpop("mssg", 10);
  console.log(res);
}

// leftPush();
// rightPush();
// leftPop();
// rightPop();
// lenOfList();
// getList(0, -1);
// trimList(0,1);
// blockingPop();
// keepLatestN();
// checkExistenceOfList();
// lmove();
// blMove();
// lmPop();
// elementAtIndex();
// brPop();
// blPop();
// linsert();
// lpushx();
// lrem();
lset();
