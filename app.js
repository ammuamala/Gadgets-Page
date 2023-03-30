const express = require("express");
const API = express();

API.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = API;
