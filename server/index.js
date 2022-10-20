require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "this is message from server",
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  console.log(req.body);

  res.json({
    data,
    data:data,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
