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
    var stateConstants = {
        INITIALISING: 0,
        WAITING: 1,
        TRIGGERING: 2
    };

    var state;
    var taskRunner;
    var randomTrigger;
    var intervalId;

    initialise();

    process.on('SIGINT', function() {
        shutdown();
    });

    function initialise() {
        state = stateConstants.INITIALISING;
        registerStandardTasks();

        // TODO: Create correct task lists
        taskRunner = new TaskRunner(new TaskFactory(config.tasks));

        // TODO: Create correct triggers
        randomTrigger = new RandomDelayTrigger(config.trigger);
    }

    function shutdown() {
        clearInterval(intervalId);
        taskRunner.shutdown();
    }

    function registerStandardTasks() {
        RegisteredTasks.add('Delay', function(task) { return new DelayTask(task.time); });
        RegisteredTasks.add('Sound', function(task) { return new SoundTask(task.filename); });
        RegisteredTasks.add('Led', function(task) { return new LedTask(task.gpio, task.time); });
    }

    function startWaiting() {
        state = stateConstants.WAITING;
        console.log('Running');
        intervalId = setInterval(function() {
        }, 1000);
    }

    this.start = function() {
        startWaiting();

        var eventEmitter = randomTrigger.start();

        eventEmitter.on(config.trigger.name, function() {
            console.log('starting');
            taskRunner.execute();
        });
    };
};

module.exports = PiController;
