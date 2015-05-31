var TaskRunner = require('./TaskRunner');
var TaskFactory = require('./TaskFactory');
var RegisteredTasks = require('./RegisteredTasks');

// Standard tasks
var SoundTask = require('./tasks/SoundTask');
var DelayTask = require('./tasks/DelayTask');
var LedTask = require('./tasks/LedTask');

// Triggers
var RandomDelayTrigger = require('./triggers/RandomDelayTrigger');

var PiController = function(config) {
    registerStandardTasks();

    var taskRunner = new TaskRunner(new TaskFactory(config.tasks));

    var randomTrigger = new RandomDelayTrigger(config.trigger);
    var intervalId;
    process.on('SIGINT', function() {
        clearInterval(intervalId);
        taskRunner.shutdown();
    });

    function registerStandardTasks() {
        RegisteredTasks.add('Delay', function(task) { return new DelayTask(task.time); });
        RegisteredTasks.add('Sound', function(task) { return new SoundTask(task.filename); });
        RegisteredTasks.add('Led', function(task) { return new LedTask(task.gpio, task.time); });
    }

    this.execute = function() {
        var eventEmitter = randomTrigger.start();
        console.log('Running');
        intervalId = setInterval(function() {
            console.log('.');
        }, 1000);

        eventEmitter.on(config.trigger.name, function() {
            console.log('starting');
            taskRunner.execute();
        });
    };
};

module.exports = PiController;
