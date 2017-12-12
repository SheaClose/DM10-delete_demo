const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 3001,
  app = express(),
  tempArr = [];

app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(__dirname));

app.post("/api/arr", function(req, res) {
  tempArr.push(req.body);
  return res.json(tempArr);
});
app.delete("/api/arr/:id", function(req, res) {
  console.log(tempArr);

  tempArr.splice(req.params.id, 1);

  return res.json(tempArr);
});

app.listen(port, function() {
  console.log("Server listening on port", port);
});
