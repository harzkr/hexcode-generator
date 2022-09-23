import { client } from "../../lib/redis";

//we start at the lowest hex value, assigning a decimal equivalent value for referencing from how the data is stored in redis
let start_counter = 268435456;

// we increment by 10000 just as a range to randomly select from
let current_counter = 268445456;
const end_counter = 16 ** 8;

// Keeping a track of current codes and keys for not having to reference redis everytime
let current_keys = [];
let current_codes = {};

const resetRedis = async () => {
  await client.flushAll();
};

const validCode = (code) => {
  return true;
};

const populateKeys = async () => {
  current_codes = await client.hGetAll("codes");

  if (!current_codes) {
    await populateRedis();
    current_codes = await client.hGetAll("codes");
  }

  current_keys = Object.keys(allCodes);
};

const fetchCode = async () => {
  if (current_keys.length === 0) {
    await populateKeys();
  }

  const randomKey =
    current_keys[Math.floor(Math.random() * current_keys.length)];

  const code = current_codes[randomKey];

  current_keys.splice(current_keys.indexOf(randomKey), 1);
  delete current_codes[randomKey];

  if (current_keys.length === 0) {
    await resetRedis();
  }

  return code;
};

const populateRedis = async () => {
  for (let i = start_counter; i < current_counter; i++) {
    const currCode = i.toString(16).toUpperCase();
    if (validCode(currCode)) {
      await client.hSet("codes", i, currCode);
    }
  }

  console.log("done populating redis");
  start_counter = current_counter;
  current_counter = current_counter + 10000;

  if (current_counter > end_counter) {
    current_counter = end_counter;
  }

  if (start_counter === end_counter) {
    await resetRedis();
    start_counter = 268435456;
    current_counter = 268445456;
  }
};

const runTester = () => {
  console.time("runTester");
  for (let i = 268435456; i < 268445456; i++) {
    console.log(i.toString(16).toUpperCase());
    if (i === 268445456 - 1) {
      console.log(i.toString(16).toUpperCase());
      console.log("doing last element");
    }
  }
  console.timeEnd("runTester");
};

export default async function handler(req, res) {
  const fetchedCode = await fetchCode();

  console.log("final fetched code", fetchedCode);

  res.status(200).json({ code: fetchedCode });
}
