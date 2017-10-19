import * as Koa from 'koa'
import * as Router from 'koa-router'
// import * bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

router.get('/staffs', async (ctx, next) => {
  ctx.body = 'Hello World!'
})

app.use(router.routes())
app.use(router.allowedMethods())

const server = app

export default server
