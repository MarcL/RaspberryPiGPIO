var registeredTasks = require('./RegisteredTasks');

var TaskFactory = function(taskArray) {
    validateParameters();

    return taskArray.map(function(task) {
        return registeredTasks.create(task);
    });

    function validateParameters() {
        if (taskArray === undefined) {
            throw new Error('Task list must be defined.');
        }

        if (!Array.isArray(taskArray)) {
            throw new Error('Task list must be an array of tasks.');
        }

        if (taskArray.length === 0) {
            throw new Error('Task list must not be empty.');
        }
    }
};

module.exports = TaskFactory;
