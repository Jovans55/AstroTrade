const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./api"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
