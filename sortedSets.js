const { connectRedis } = require("./client");

connectRedis()
  .then(async (client) => {
    // await addKey(client);
    // await zRange(client);
    // await zrank(client);
    // await zrevRank(client);
    // await zRem(client);
    // await cardinality(client);
    // await zCount(client);
    // await difference(client);
    // await differenceStore(client);
    // await incrBy(client);
    // await zInter(client);
    // await zInterCard(client);
    // await zLexCount(client);
    // await zScan(client);
    await zScore(client);
  })
  .catch((e) => {
    console.log(e);
  });

async function addKey(client) {
  const res = await client.zAdd("racer", [
    { score: 100, value: "a" },
    { score: 20, value: "b" },
    { score: 40, value: "c" },
    { score: 80, value: "d" },
  ]);
  console.log(res);
}

//supports rev for reversing order in newer versions
// can search by score or by lex by specifying attrubite in newer versions
async function zRange(client) {
  const res = await client.zRange("racer", 0, -1);
  console.log(res);
}

async function zrank(client) {
  const res = await client.zRank("racer", "a");
  console.log(res);
}

async function zrevRank(client) {
  const res = await client.zRevRank("racer", "a");
  console.log(res);
}

//remove the key
async function zRem(client) {
  const res = await client.zRem("racer", "d");
  console.log(res);
}

async function cardinality(client) {
  const res = await client.zCard("racer");
  console.log(res);
}

//returns ele with inclusive min and max score
async function zCount(client) {
  const res = await client.zCount("racer", 20, 60);
  console.log(res);
}

//version issue
async function difference(client) {
  const res = await client.zDiff(2, ["racer", "racer1"]);
  console.log(res);
}

//version issue
async function differenceStore(client) {
  const res = await client.zDiffStore("res", 2, ["racer", "racer1"]);
  console.log(res);
}

async function incrBy(client) {
  const res = await client.zIncrBy("racer", 10, "a");
  console.log(res);
}

//version issue
async function zInter(client) {
  const res = await client.zInter(2, "racer", "racer1");
  console.log(res);
}

//version issue
async function zInterCard(client) {
  const res = await client.zInterCard(2, "racer", "racer1");
  console.log(res);
}

//version issue
async function zInterStore(client) {
  const res = await client.zInterStore("res", 2, "racer", "racer1");
  console.log(res);
}

//version issue
async function zDiffStore(client) {
  const res = await client.zDiffStorez("res", 2, "racer", "racer1");
  console.log(res);
}

async function zScan(client) {
  // let cursor1 = 0;
  // do {
  //   const [cursor, members] = await client.zScan(
  //     "racer",
  //     cursor1,
  //     // "MATCH",
  //     // "*a*",
  //     "COUNT",
  //     2
  //   );
  //   cursor1 = cursor;

  //   console.log("Scanned elements:", members);
  // } while (cursor1 !== 0);

  const res = await client.zScan(0, "COUNT", 2);
  console.log(res);
}

async function zScore(client) {
  const res = await client.zScore("racer", "a");
  console.log(res);
}

//ZMPOP
// -> takes multiple sets and count as arguments
// -> removes the count number of elements from the first non-empty set
// -> MIN attribute specifies that smallest ele will be popped
// -> MAX attribute specifies that largest ele will be popped

//ZMSCORE
// -> takes mulitple members of set as arguments
// -> returns the score assciated with each member

//ZPOPMAX
// -> takes a set key and count as argument and removes the count number of max ele

// ZPOPMIN
// -> takes a set key and count as argument and removes the count number of min ele

//ZRANGESTORE
// -> same as zrange but stores the result in destination

// addKey();
// zRange();
// zRevRange();
// zrank();
// zrevRank();
// zRem();
// cardinality();
// zCount();
// difference();
// differenceStore();
// incrBy();
// zInter();
// zinterCard();
