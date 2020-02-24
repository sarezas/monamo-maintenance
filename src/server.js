const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/monamo-under-construction"));

app.get("*", function(req, res) {
  res.sendFile(
    path.join(__dirname + "/dist/monamo-under-construction/index.html")
  );
});

app.listen(process.env.PORT || 8080);
