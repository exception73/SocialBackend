const express = require("express");
const app = express();
const post = require("./routes/post");
const user = require("./routes/user");
const cookieParser = require("cookie-parser");
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use("/api/v1", post);
app.use("/api/v1", user);


// Importing Routes


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});


module.exports = app;
