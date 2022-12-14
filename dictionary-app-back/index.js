const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig.js"); // connect MongoDB
const PORT = process.env.PORT || 5000; // port number
const app = express();
const route = require("./routers/index"); // router impl
const bodyParser = require("body-parser");

app.use(
  cors()
  //  { credentials: true, origin: "http://localhost:3000" }
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

connectDB();

route(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
