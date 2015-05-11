var SoundTask = require('./tasks/SoundTask');
var SleepTask = require('./tasks/SleepTask');

var RegisteredTasks = function() {
    var taskList = {};

    this.create = function(task) {
        return taskList[task.type](task);
    };

    this.add = function(name, creationFunction) {
        taskList[name] = creationFunction;
    };

    this.add('Sleep', function(task) { return new SleepTask(task.time); });
    this.add('Sound', function(task) { return new SoundTask(task.filename); });
};

module.exports = new RegisteredTasks();
