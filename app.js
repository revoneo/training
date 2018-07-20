const Koa        = require("koa");
const Router     = require("koa-router");
const BodyParser = require("koa-bodyparser");
const logger     = require("koa-logger");
const cors       = require('@koa/cors');
const mongoose   = require("mongoose");

const app = new Koa();
const router = new Router();

// db
mongoose.connect('mongodb://localhost/training');

// models
const User = require('./models/user')

// middleware
app.use(BodyParser());
app.use(logger());
app.use(cors());

router.get("/", async ctx => {
  ctx.body = "hello, world";
});

router.post("/user", async ctx => {
  const body = ctx.request.body;
  const user = new User(body);
  await user.save();
  ctx.body = user;
});

router.get("/user", async ctx => {
  const account = ctx.request.query.account || "account";
  const user = await User.findOne({account: account});
  ctx.body = user;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

console.log("Server running on port 3000");

module.exports = app;
