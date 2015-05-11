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