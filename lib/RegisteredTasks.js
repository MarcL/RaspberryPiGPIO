var SoundTask = require('./tasks/SoundTask');
var DelayTask = require('./tasks/DelayTask');

var RegisteredTasks = function() {
    var taskList = {};

    this.create = function(task) {
        return taskList[task.type](task);
    };

    this.add = function(name, creationFunction) {
        taskList[name] = creationFunction;
    };

    this.add('Delay', function(task) { return new DelayTask(task.time); });
    this.add('Sound', function(task) { return new SoundTask(task.filename); });
};

module.exports = new RegisteredTasks();
