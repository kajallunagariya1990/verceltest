const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
// var indexRouter = require('./routes/index');

//Middleware files
app.use(cors());
app.use(express.json());
// app.use('/', indexRouter);

app.get("/", (req, res) => {
  res.send("my name is vijay 111111");
});

app.listen(PORT, () => {
  console.log(`This server is running on PORT ${PORT}`);
});
