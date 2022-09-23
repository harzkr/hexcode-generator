

export default function handler(req, res) {

  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  res.status(200).json({ code: genRanHex(8) });
}
