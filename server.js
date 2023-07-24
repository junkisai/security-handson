const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.send("Top Page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
