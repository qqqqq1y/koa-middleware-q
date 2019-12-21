class cache {
  constructor() {
    this.cacheObj = {};
    this.timer = null;
  }

  clearCache() {
    clearTimeout(this.timer);

    const a = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
    const now = new Date(new Date()).getTime();

    if (a === now) {
      this.cacheObj = {};

      return;
    }

    this.timer = setTimeout(() => {
      this.clearCache();
    }, 1000);
  }

  init(ctx, url) {
    if (!this.cacheObj[url]) { // 首次调用
      this.cacheObj[url] = 'cache';

      ctx.body = 'first entry';
    } else { // 非首次调用, 从缓存中取值
      ctx.body = this.cacheObj[url];
    }

    this.clearCache();
  }
};

module.exports = cache;
