// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(201).json({ message: "Post request" });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
