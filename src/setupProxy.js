const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // Development Proxy
  app.use(proxy('/api/*', { target: 'https://answerket-server.herokuapp.com/' }));
};
