const Koa = require('koa');
const {koaBody} = require('koa-body');
const Router = require('@koa/router')
const { ask } = require('./openai');

const router = new Router();
const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(koaBody());

router.post('/gen-faq', async (ctx) => {
  const { q } = ctx.request.body;
  const answer = await ask(q)
  ctx.body = {
    answer
  };
});

router.get('/hello', async (ctx) => {
  ctx.body = 'Hello';
});

app.use(router.routes());

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
