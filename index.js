const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
//Middleware files
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This server is Connected");
});

app.listen(PORT, () => {
  console.log(`This server is running on PORT ${PORT}`);
});
