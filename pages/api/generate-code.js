

export default function handler(req, res) {
  console.log('We will handle the request here');

  res.status(200).json({ code: 'ABCDEF12' });
}
