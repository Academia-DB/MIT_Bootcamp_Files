const express = require("express");
const low = require("lowdb");
const fs = require("lowdb/adapters/FileSync");
const cors = require("cors");
const _ = require("lodash");
const request = require("request");
const adapter = new fs("db.json");
const db = low(adapter);
const app = express();
const port = 8000; // don't edit this code

db.defaults({ users: [] }).write();

app.get("/", function (req, res) {
  res.send("On Express server running on port 8000...");
});

app.get("/data", function (req, res) {
  res.send(db.get("users").value());
});

app.listen(port, function () {
  console.log(`Running on port ${port}...`);
});
