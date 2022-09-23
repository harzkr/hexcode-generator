import { client } from '../../lib/redis';
let start_counter = 268435456;
let current_counter = 268445456;
const end_counter = 16**8;

let current_keys = [];


const resetRedis = () => {
  client.flushAll();
}

const validCode = (code) => {
  return true;
};

const fetchCode = async () => {

  const allCodes = await client.hGetAll('codes');

  const allKeys = Object.keys(allCodes);

  const randomKey = allKeys[Math.floor(Math.random() * allKeys.length)];

  const code = allCodes[randomKey];

  return code;
};

const populateRedis = async () => {
  for(let i=start_counter; i < current_counter; i++) {
    const currCode = i.toString(16).toUpperCase();
    if(validCode(currCode)) {
      await client.hSet('codes', i, currCode);
    }
  }

  console.log('done populating redis');
  start_counter = current_counter;
  current_counter = current_counter + 10000;
};

const runTester = () => {
  console.time('runTester');
  for(let i=268435456; i < 268445456; i++) {
    console.log(i.toString(16).toUpperCase());
    if(i === 268445456 - 1) {
      console.log(i.toString(16).toUpperCase())
      console.log('doing last element')
    }
  }
  console.timeEnd('runTester');
}

export default async function handler(req, res) {

  //await resetRedis();
  //populateRedis();
  //console.log(client);
  //resetRedis();
  //runTester();

  const fetchedCode = await fetchCode();

  console.log('final fetched code', fetchedCode);

  res.status(200).json({ code: fetchedCode });
}
