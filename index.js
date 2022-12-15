const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
//Middleware files
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("my name is vijay 111111");
});

app.listen(PORT, () => {
  console.log(`This server is running on PORT ${PORT}`);
});
