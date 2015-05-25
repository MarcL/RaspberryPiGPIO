//var PiController = require('./lib/PiController');
//var config = require('./assets/config');

//var piController = new PiController(config);
//piController.execute();

var Gpio = require('onoff').Gpio;
var led = new Gpio(2, 'out');

var state = 0;

console.log('Starting...');
setInterval(changeLed, 400);

function changeLed() {
    led.writeSync(state);
    state = (state === 1) ? 0 : 1;
}

process.on('SIGINT', function() {
    console.log('Shutdown...');
    led.unexport();
    process.exit();
});
