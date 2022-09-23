

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

  runTester();

  res.status(200).json({ code: genRanHex(8) });
}
