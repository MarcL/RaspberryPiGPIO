var registeredTasks = require('./RegisteredTasks');

var TaskFactory = function(tasks) {
    if (tasks === undefined) {
        throw new Error('No tasks found');
    }
    return tasks.map(function(task) {
        return registeredTasks.create(task);
    });
};

module.exports = TaskFactory;
