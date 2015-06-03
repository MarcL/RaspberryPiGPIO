var Promise = require('es6-promise').Promise;

var TaskRunner = function() {

    this.execute = function(taskList) {
        var promise = new Promise(function(resolve) {
            taskList.reduce(function(sequence, task) {
                return sequence.then(function() {
                    return task.execute();
                });
            }, Promise.resolve()).then(function() {
                resolve('finished tasklist');
            });
        });

        return promise;
    };

    this.shutdown = function(taskList) {
        for (var i = 0; i < taskList.length; i++) {
            if (typeof taskList[i].shutdown === 'function') {
                taskList[i].shutdown();
            }
        }
    };
};

module.exports = TaskRunner;
