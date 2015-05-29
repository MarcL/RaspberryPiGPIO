var registeredTasks = require('./RegisteredTasks');

var TaskFactory = function(config) {
    if ((config === undefined) || (config.tasks === undefined)) {
        throw new Error('No tasks found');
    }
    return config.tasks.map(function(task) {
        return registeredTasks.create(task);
    });
};

module.exports = TaskFactory;
