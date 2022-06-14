const createError = require("http-errors");
const express = require("express");
// const passport = require("passport");
// const bodyParser = require("body-parser");
const path = require("path");
// const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("./auth/auth");

/*Router */
const usersRouter = require("./routes/users");
const contactRouter = require("./routes/contact");
const roomsRouter = require("./routes/rooms");
const bookingsRouter = require("./routes/bookings");
const loginRouter = require("./routes/login");

const app = express();

// view engine setup

/*eslint-disable-next-line */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

/* eslint-disable-next-line */
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/contact", contactRouter);
app.use("/rooms", roomsRouter);
app.use("/bookings", bookingsRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  // res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
