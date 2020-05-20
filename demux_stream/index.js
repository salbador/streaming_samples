const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  const rs = fs.createReadStream("video.mp4");
  rs.pipe(res);
});

app.get("/ping", function (req, res) {
  res.send("pong! Its working");
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
