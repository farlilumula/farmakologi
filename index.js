const express = require("express");
var moment = require("moment");
const userRouter = require("./router/items");
const buyRouter = require("./router/buys");
const keywordRouter = require("./router/keywords");
const mongoose = require("mongoose");

// const { Telegraf } = require('telegraf');

// const bot = new Telegraf('5733739052:AAF8WE4FYdzA6NRlZfV4lemp1Sg5hiWnw40');

const app = express();
const port = process.env.PORT || 3000;
const http = require("http");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode

var myLogger = function (req, res, next) {
  req.time = new Date();
  next();
};

// const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://dbadmin:Db2ibmrd7@farmokologi.xel5x.mongodb.net/farmokologi?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  .then((result) => app.listen(port))
  .catch((error) => console.log(error));

app.use(myLogger);
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const kelas = {
    id: 1,
    nama: "Permograman Nodejs",
    date: req.time.toString(),
  };
  res.render("pages/index", { kelas: kelas });
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.get("/buy", function (req, res) {
  res.render("buy/index");
});

app.post("/index", function (req, res) {
  res.render("user/index");
});

app.get("/keyword", function (req, res) {
  res.render("pages/keyword");
});

// bot.start((ctx) => ctx.reply('Welcome'));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// bot.launch();

app.use(userRouter);
app.use(buyRouter);
app.use(keywordRouter);

// app.listen(3000, function () {
//   console.log("server is ok");
// });





