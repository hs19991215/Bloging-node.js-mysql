const express = require("express");
const postRoute = require("./routes/post.route");
const userRoute = require("./routes/user.post");
const imageRoute = require("./routes/image.route");
const categoryRoute = require("./routes/category.route");
const testRoute = require("./routes/test.route");
const addressRoute = require("./routes/address.route");

const app = express();

app.use("/uploads", express.static("uploads"));

app.use("/posts", postRoute);
app.use("/user", userRoute);
app.use("/image", imageRoute);
app.use("/category", categoryRoute);
app.use("/test", testRoute);
app.use("/address", addressRoute);

module.exports = app;
