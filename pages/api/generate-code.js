import { client } from '../../lib/redis';

const resetRedis = () => {
  client.flushall();
}

const populateRedis = async () => {
  for(let i=1; i < 10; i++) {
    await client.hSet('codes', i.toString(16).toUpperCase(), 1);
    if(i === 16**8 - 1) {
      console.log(i.toString(16).toUpperCase())
      console.log('doing last element')
    }
  }

  const res = await client.hGetAll('codes');
  console.log(res);
}

const runTester = () => {
  console.time('runTester');
  for(let i=268435456; i < 16**8; i++) {
    //console.log(i.toString(16).toUpperCase());
    if(i === 16**8 - 1) {
      console.log(i.toString(16).toUpperCase())
      console.log('doing last element')
    }
  }
  console.timeEnd('runTester');
}

export default function handler(req, res) {

  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  populateRedis();
  //console.log(client);

  res.status(200).json({ code: genRanHex(8) });
}
