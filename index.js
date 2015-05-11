var TaskRunner = require('./lib/TaskRunner');
var SoundTask = require('./lib/tasks/SoundTask');
var SleepTask = require('./lib/tasks/SleepTask');

var config = require('./assets/config');

// Create task list
// TODO: Create factory which creates instances of registered tasks
var taskList = config.tasks.map(function(task) {
    switch (task.type) {
        case 'Sleep':
            return new SleepTask(task.time);
        case 'Sound':
            return new SoundTask(task.filename);
    }
});

var taskRunner = new TaskRunner(taskList);
taskRunner.execute();
