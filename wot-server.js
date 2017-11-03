var httpServer = require('./servers/http'),
  resources = require('./../resources/model');

var server = httpServer.listen(resources.pi.port, function () {
  console.info('Moc jest z nami i działa na porcie %s', resources.pi.port);
});
