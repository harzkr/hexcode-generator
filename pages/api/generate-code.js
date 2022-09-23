import { client } from "../../lib/redis";
import { hexspeakList } from "../../utils/hexspeaklist";

const ranges = [
  "00000000",
  "10000000",
  "20000000",
  "30000000",
  "40000000",
  "50000000",
  "60000000",
  "70000000",
  "80000000",
  "90000000",
  "A0000000",
  "B0000000",
  "C0000000",
  "D0000000",
  "E0000000",
  "F0000000",
];

let current_range = 0;

// Keeping a track of current codes and keys for not having to reference redis everytime
let current_keys = [];
let current_codes = {};

const resetRedis = async () => {
  await client.flushAll();
};

const validCode = (code) => {
  const codeArray = code.split("");
  let diff = 0;

  //Same charachter checks
  if (codeArray.every((char) => char === codeArray[0])) {
    return false;
  }

  //hexspeak checks
  if (hexspeakList.includes(code)) {
    return false;
  }

  //sequence checks
  for (let i = 0; i < codeArray.length - 1; i++) {
    if (i === 0) {
      diff = codeArray[i + 1].charCodeAt(0) - codeArray[i].charCodeAt(0);
    } else {
      if (
        diff !==
        codeArray[i + 1].charCodeAt(0) - codeArray[i].charCodeAt(0)
      ) {
        return true;
      }
    }
  }

  return false;
};

const populateKeys = async () => {
  current_codes = await client.hGetAll("codes");
  if (!current_codes || Object.keys(current_codes).length === 0) {
    await populateRedis();
    current_codes = await client.hGetAll("codes");
  }

  current_keys = Object.keys(current_codes);
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

  console.log(current_keys.length, "current length");

  return code;
};

const populateRedis = async () => {
  for (const elem of ranges) {
    for (
      let i = parseInt(elem, 16) + current_range;
      i < parseInt(elem, 16) + current_range + 1000;
      i++
    ) {
      let hexCode = i.toString(16).toUpperCase();
      if(hexCode.length < 8){
        hexCode = hexCode.padStart(8, '0')
      }
      if (validCode(hexCode)) {
        await client.hSet("codes", i, hexCode);
      }
    }
  }

  current_range += 1000;

  if (current_range >= 268435456) {
    current_range = 0;
    await resetRedis();
  }
};

export default async function handler(req, res) {
  //populateRedis();
  const fetchedCode = await fetchCode();

  console.log("final fetched code", fetchedCode);

  res.status(200).json({ code: fetchedCode });
}
