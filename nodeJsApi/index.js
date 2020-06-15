var express = require("express");
var app = express();
var port = 5000;

app.get("/", function (req, res) {
  res.status(200).send({
    status: "success",
    message: "hello world.",
  });
});

app.get("/about", function (req, res) {
  res.status(200).send({
    status: "success",
    author: "Nishant Baheti",
  });
});

app.listen(port, function () {
  console.log("app listening at port " + port);
});
