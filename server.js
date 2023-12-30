const path = require("path");
const ejs = require("ejs");
const axios = require("axios");
const express = require("express");
const qs = require("qs");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

//static folder
app.use(express.static(path.join(__dirname, "public")));

//routes
app.get("", (req, res) => {
  res.render("index");
});

app.get("/About_Us", (req, res) => {
  res.render("about");
});

app.get("/CodeMate/:roomid", (req, res) => {
  res.render("codemate", {
    id: req.params.roomid,
  });
});

app.get("/answer", (req, res) => {
  const reqData = JSON.parse(req.query.submit);

  var data = qs.stringify({
    code: reqData.code,
    language: reqData.language,
    input: reqData.input,
  });

  var config = {
    method: "post",
    url: "https://codex-api.fly.dev/",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
    });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
