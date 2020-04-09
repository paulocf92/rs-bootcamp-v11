const express = require("express");

const app = express();

app.get("/projects", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.listen(3333, () => {
  console.log("Backend started!");
});
