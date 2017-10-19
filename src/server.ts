import * as Koa from 'koa'
import * as Router from 'koa-router'
// import * bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

router.get('/tasks', async (ctx, next) => {
  ctx.body = 'Hello World!'
})

app.use(router.routes())
app.use(router.allowedMethods())

export default app.listen(3001, () => console.log('Listening on port 3001...'))

