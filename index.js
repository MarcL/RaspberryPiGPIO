// var Gpio = require('onoff').Gpio;
// var led = new Gpio(13, 'out');
// var button = new Gpio(4, 'in', 'both');

// button.watch(function(error, value) {
// 	led.writeSync(value);
// });

var TaskRunner = require('./lib/TaskRunner');
var SoundTask = require('./lib/tasks/SoundTask');
var SleepTask = require('./lib/tasks/SleepTask');

var sleepTask = new SleepTask(3000);
var soundTask = new SoundTask('assets/sound/cuckoo-clock.mp3');

var tasklist = [
    sleepTask,
    soundTask
];
var taskRunner = new TaskRunner(tasklist);
taskRunner.execute();

// sleepTask.execute().then(function(data) {
//     console.log(data);
//     return soundTask.execute();
// }).then(function(data) {
//     console.log(data);
// }, function(error) {
//     console.log('Error: ' + error);
// });
