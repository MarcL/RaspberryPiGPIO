var Promise = require('es6-promise').Promise;

var DelayTask = function(timeMs) {

    this.execute = function() {
        var promise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve('Finished sleeping: ' + timeMs + 'ms');
            }, timeMs);
        });

        return promise;
    };
};

module.exports = DelayTask;
