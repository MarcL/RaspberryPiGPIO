var TaskRunner = require('./lib/TaskRunner');
var TaskFactory = require('./lib/TaskFactory');
var config = require('./assets/config');

var taskRunner = new TaskRunner(new TaskFactory(config));
taskRunner.execute();
