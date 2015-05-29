var Promise = require('es6-promise').Promise;
var Gpio = require('onoff').Gpio;

var ButtonTrigger = function(gpio) {
    if (gpio === undefined) {
        throw new Error('Invalid Gpio');
    } else if ((gpio < 2) || (gpio > 27)) {
        throw new Error('Invalid Gpio : ' + gpio);
    }
    var button = new Gpio(gpio, 'in', 'both');

    this.execute = function() {
        var promise = new Promise(function(resolve, reject) {
            button.watch(function(error, value) {
                if (error) {
                    reject(error);
                } else {
                    resolve(value);
                }
            });
        });

        return promise;
    };

    this.shutdown = function() {
        button.unexport();
    };
};

module.exports = ButtonTrigger;
