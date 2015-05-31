var PiController = require('./lib/PiController');
var config = require('./assets/config');

var piController = new PiController(config);
piController.start();
