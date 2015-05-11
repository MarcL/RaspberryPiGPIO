var Gpio = require('onoff').Gpio;
var led = new Gpio(13, 'out');
var button = new Gpio(4, 'in', 'both');

button.watch(function(error, value) {
	led.writeSync(value);
});