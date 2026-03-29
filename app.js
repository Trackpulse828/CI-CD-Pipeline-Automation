const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("CI/CD working 🚀");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
