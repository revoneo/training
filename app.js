const Koa        = require("koa");
const Router     = require("koa-router");
const BodyParser = require("koa-bodyparser");
const logger     = require("koa-logger");
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

router.get("/user", async ctx => {
  // const user = new User({
  //   account: 'testAccount2',
  //   password: 'testPassword2'
  // });
  // await user.save();
  const account = ctx.request.query.account || "testAccount";
  const newUser = await User.findOne({account: account});
  ctx.body = newUser;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

console.log("Server running on port 3000");
