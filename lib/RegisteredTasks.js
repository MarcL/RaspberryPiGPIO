// var SoundTask = require('./tasks/SoundTask');
// var DelayTask = require('./tasks/DelayTask');

var RegisteredTasks = function() {
    var taskList = {};

    this.create = function(task) {
        var taskInstance;
        if (task.type in taskList) {
            taskInstance = taskList[task.type](task);
        }

        return taskInstance;
    };

    this.add = function(name, creationFunction) {
        taskList[name] = creationFunction;
    };

    this.list = function() {
        return Object.keys(taskList);
    };

    // this.add('Delay', function(task) { return new DelayTask(task.time); });
    // this.add('Sound', function(task) { return new SoundTask(task.filename); });
};

module.exports = new RegisteredTasks();
