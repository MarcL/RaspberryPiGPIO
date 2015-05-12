var TaskRunner = require('./TaskRunner');
var TaskFactory = require('./TaskFactory');
var RegisteredTasks = require('./RegisteredTasks');

// Standard tasks
var SoundTask = require('./tasks/SoundTask');
var DelayTask = require('./tasks/DelayTask');

var PiController = function(config) {
    registerStandardTasks();

    var taskRunner = new TaskRunner(new TaskFactory(config));

    function registerStandardTasks() {
        RegisteredTasks.add('Delay', function(task) { return new DelayTask(task.time); });
        RegisteredTasks.add('Sound', function(task) { return new SoundTask(task.filename); });
    }

    this.execute = function() {
        taskRunner.execute();
    };
};

module.exports = PiController;
