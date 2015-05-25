//var PiController = require('./lib/PiController');
//var config = require('./assets/config');

//var piController = new PiController(config);
//piController.execute();

var Gpio = require('onoff').Gpio;
var led = new Gpio(2, 'out');

var state = 0;

setInterval(changeLed, 1000);

function changeLed() {
    console.log('LED: ' + state);
    led.writeSync(state);
    state = (state === 1) ? 0 : 1;
}
