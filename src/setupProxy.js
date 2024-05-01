const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://193.203.162.231:8080',
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}