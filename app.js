const express = require("express");
const postRoute = require("./routes/post.route");
const userRoute = require("./routes/user.post");

const app = express();

app.use("/posts", postRoute);
app.use("/user", userRoute);

module.exports = app;
