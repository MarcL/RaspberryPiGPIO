var EventEmitter = require('events').EventEmitter;

var RandomDelayTrigger = function(options) {
    var eventEmitter = new EventEmitter();

    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

    this.getEventEmitter = function() {
        return eventEmitter;
    };

    this.start = function() {
        var randomTime = randomIntInc(options.min, options.max);
        console.log('RandomDelayTrigger : ' + randomTime);
        setTimeout(function() {
            console.log('Triggering : ' + options.name);
            eventEmitter.emit('triggered', options);
        }, randomTime);

        return eventEmitter;
    };
};

module.exports = RandomDelayTrigger;
