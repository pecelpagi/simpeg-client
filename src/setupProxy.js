const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api-file-uploader', {
      target: 'http://193.203.162.231:6600',
      changeOrigin: true,
      pathRewrite: {
        "^/api-file-uploader": "/",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
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