var Promise = require('es6-promise').Promise;
var Gpio = require('onoff').Gpio;

var LedTask = function(gpio, timeMs) {
    if (gpio === undefined) {
        throw new Error('Invalid Gpio');
    } else if ((gpio < 2) || (gpio > 27)) {
        throw new Error('Invalid Gpio : ' + gpio);
    }
    var led = new Gpio(gpio, 'out');

    this.execute = function() {
        led.writeSync(1);
        var promise = new Promise(function(resolve) {
            setTimeout(function() {
                led.writeSync(0);
                resolve('LED off (gpio ' + gpio + ')');
            }, timeMs);
        });

        return promise;
    };

    this.shutdown = function() {
        console.log('Shutdown LED : ' + gpio);
        led.unexport();
    };
};

module.exports = LedTask;
