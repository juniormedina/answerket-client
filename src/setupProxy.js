const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // Development Proxy
  app.use(proxy('/api/*', { target: process.env.NODE_ENV === 'production' ? 'http://localhost:5000/' : 'https://answerket-server.herokuapp.com/' }));
};
