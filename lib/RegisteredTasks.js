var RegisteredTasks = function() {
    var taskList = {};

    this.create = function(task) {
        if (task.type in taskList) {
            return taskList[task.type](task);
        }

        throw new Error('Task not registered : ' + task.type);
    };

    this.add = function(name, creationFunction) {
        taskList[name] = creationFunction;
    };

    this.remove = function(name) {
        if (name in taskList) {
            delete taskList[name];
        } else {
            throw new Error('Task has not been registered : ' + name);
        }
    };

    this.list = function() {
        return Object.keys(taskList);
    };

    this.clear = function() {
        taskList = {};
    };
};

module.exports = new RegisteredTasks();
