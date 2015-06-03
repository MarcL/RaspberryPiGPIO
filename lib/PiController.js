var TaskRunner = require('./TaskRunner');
var TaskFactory = require('./TaskFactory');
var RegisteredTasks = require('./RegisteredTasks');

// Standard tasks
var SoundTask = require('./tasks/SoundTask');
var DelayTask = require('./tasks/DelayTask');
var LedTask = require('./tasks/LedTask');

// Triggers
var RandomDelayTrigger = require('./triggers/RandomDelayTrigger');
var ButtonTrigger = require('./triggers/ButtonTrigger');

var PiController = function(config) {
    var stateConstants = {
        INITIALISING: 0,
        WAITING: 1,
        TRIGGERING: 2
    };

    var state;
    var taskRunner;
    var intervalId;
    var triggerList;

    initialise();

    process.on('SIGINT', function() {
        shutdown();
    });

    function initialise() {
        state = stateConstants.INITIALISING;
        registerStandardTasks();

        // TODO: Create correct task lists
        taskRunner = new TaskRunner(new TaskFactory(config.tasks));

        // Create triggers and bind to events
        triggerList = new TaskFactory(config.triggers);
    }

    function startTriggers() {
        triggerList.map(function(trigger) {
            var eventEmitter = trigger.getEventEmitter();

            eventEmitter.on('triggered', function(triggerOptions) {
                startTaskList(triggerOptions.taskListName);
            });

            trigger.start();
        });
    }

    function shutdown() {
        clearInterval(intervalId);
        taskRunner.shutdown();
    }

    function registerStandardTasks() {
        // Register tasks
        RegisteredTasks.add('Delay', function(task) { return new DelayTask(task.time); });
        RegisteredTasks.add('Sound', function(task) { return new SoundTask(task.filename); });
        RegisteredTasks.add('Led', function(task) { return new LedTask(task.gpio, task.time); });

        // Register triggers
        RegisteredTasks.add('RandomDelayTrigger', function(options) { return new RandomDelayTrigger(options); });
        RegisteredTasks.add('ButtonTrigger', function(options) { return new ButtonTrigger(options); });
    }

    function startWaiting() {
        state = stateConstants.WAITING;
        console.log('Running');
        intervalId = setInterval(function() {
        }, 1000);
    }

    function startTaskList(taskListName) {
        if (state !== stateConstants.WAITING) {
            console.log('Tasklist already running. Ignoring new request.');
            return;
        }

        // TODO: Choose correct tasklist to start
        console.log('Starting task list : ' + taskListName);
        state = stateConstants.TRIGGERING;
        taskRunner.execute().then(function() {
            state = stateConstants.WAITING;
        });
    }

    this.start = function() {
        startTriggers();
        startWaiting();
    };
};

module.exports = PiController;
