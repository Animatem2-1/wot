var httpServer = require('./servers/http'),
  resources = require('./../resources/model');

var ledPlugin = require('./plugins/internal/ledsPlugin'),
  dhtPlugin = require('./plugins/internal/DHT22SensorPlugin.js');

ledsPlugin.start({'simulate': true, 'frequency': 2000});
dhtPlugin.start({'simulate': true, 'frequency': 5000})

var server = httpServer.listen(resources.pi.port, function () {
  console.info('Moc jest z nami i działa na porcie %s', resources.pi.port);
});
