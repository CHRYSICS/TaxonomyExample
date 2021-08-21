// server
const express = require("express");
const PORT = process.env.PORT || 5001;

const app = express();

//test api routing
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

