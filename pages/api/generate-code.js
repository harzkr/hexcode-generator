

export default function handler(req, res) {
  console.log('We will handle the request here');

  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  res.status(200).json({ code: genRanHex(8) });
}
