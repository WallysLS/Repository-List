const express = require("express");

const taker = express();

taker.get("/", (request, response) =>
response.json({
    message: "It worked",
    author: "Me"
}));

taker.listen(3000); 