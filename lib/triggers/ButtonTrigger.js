var Gpio = require('onoff').Gpio;
var EventEmitter = require('events').EventEmitter;

var ButtonTrigger = function(options) {
    if (options.gpio === undefined) {
        throw new Error('Invalid Gpio');
    } else if ((options.gpio < 2) || (options.gpio > 27)) {
        throw new Error('Invalid Gpio : ' + options.gpio);
    }
    var button = new Gpio(options.gpio, 'in', 'both');
    var eventEmitter = new EventEmitter();

    console.log('Initialised Trigger : ' + options.name);

    this.getEventEmitter = function() {
        return eventEmitter;
    };

    this.start = function() {
        button.watch(function() {
            eventEmitter.emit('triggered', options);
        });
    };

    this.shutdown = function() {
        button.unexport();
    };
};

module.exports = ButtonTrigger;
