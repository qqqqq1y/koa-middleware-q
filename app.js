const koa = require('koa');
const app = new koa();
const Cache = require('./cache.js');
const cache = new Cache();

app.use((ctx, next) => {
  const url = ctx.request.url;

  if (url.indexOf('/api/data') > -1) {
    cache.init(ctx, url);
  }
})



app.listen(3000, () => { console.log('listen 3000'); })
