var Promise = require('es6-promise').Promise;

var TaskRunner = function(taskList) {

    this.execute = function() {
        var promise = new Promise(function(resolve) {
            taskList.reduce(function(sequence, task) {
                return sequence.then(function(data) {
                    console.log(data);
                    return task.execute();
                });
            }, Promise.resolve()).then(function() {
                resolve('finished tasklist');
            });
        });

        return promise;
    };

    this.shutdown = function() {
        for (var i = 0; i < taskList.length; i++) {
            if (typeof taskList[i].shutdown === 'function') {
                taskList[i].shutdown();
            }
        }
    };
};

module.exports = TaskRunner;
