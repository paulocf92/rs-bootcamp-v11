import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Hello GoStack" });
});

app.listen(3333);
