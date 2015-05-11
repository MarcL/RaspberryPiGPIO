var TaskRunner = require('./lib/TaskRunner');
var registeredTasks = require('./lib/RegisteredTasks');

var config = require('./assets/config');

var taskList = config.tasks.map(function(task) {
    return registeredTasks[task.type](task);
});

var taskRunner = new TaskRunner(taskList);
taskRunner.execute();
