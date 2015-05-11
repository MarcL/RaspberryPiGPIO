var registeredTasks = require('./RegisteredTasks');

var TaskFactory = function(config) {
    return config.tasks.map(function(task) {
        return registeredTasks[task.type](task);
    });
};

module.exports = TaskFactory;
