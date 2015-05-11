// var Gpio = require('onoff').Gpio;
// var led = new Gpio(13, 'out');
// var button = new Gpio(4, 'in', 'both');

// button.watch(function(error, value) {
// 	led.writeSync(value);
// });

var SoundTask = require('./lib/tasks/SoundTask');
var soundTask = new SoundTask('assets/sound/cuckoo-clock.mp3');
soundTask.play().then(function(data) {
    console.log(data);
}, function(error) {
    console.log('Error: ' + error);
});
