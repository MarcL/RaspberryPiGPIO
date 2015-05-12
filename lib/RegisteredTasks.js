var RegisteredTasks = function() {
    var taskList = {};

    this.create = function(task) {
        var taskInstance;
        if (task.type in taskList) {
            taskInstance = taskList[task.type](task);
        }

        return taskInstance;
    };

    this.add = function(name, creationFunction) {
        taskList[name] = creationFunction;
    };

    this.list = function() {
        return Object.keys(taskList);
    };

    this.clear = function() {
        taskList = {};
    };
};

module.exports = new RegisteredTasks();
