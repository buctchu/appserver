const router = require('koa-router')()
const login = require('./api/login')
const signin = require('./api/signin')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.use('/login', login.routes(), login.allowedMethods());
router.use('/signin', signin.routes(), signin.allowedMethods());


module.exports = router
