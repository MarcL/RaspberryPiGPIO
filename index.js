var TaskRunner = require('./lib/TaskRunner');
var TaskFactory = require('./lib/TaskFactory');
var config = require('./assets/config');
var registeredTasks = require('./lib/RegisteredTasks');

// Testing registering new tasks
var Promise = require('es6-promise').Promise;
var TestTask = function() {
    this.execute = function() {
        var promise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve('test task done');
            }, 100);
        });

        return promise;
    };
};

registeredTasks.add('Test', function() { return new TestTask();});
config.tasks.unshift({type: 'Test'});

var taskRunner = new TaskRunner(new TaskFactory(config));
taskRunner.execute();
