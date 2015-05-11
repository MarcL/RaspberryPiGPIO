var registeredTasks = require('./RegisteredTasks');

var TaskFactory = function(config) {
    return config.tasks.map(function(task) {
        return registeredTasks.create(task);
    });
};

module.exports = TaskFactory;
