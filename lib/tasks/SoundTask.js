var fs = require('fs');
var Lame = require('lame');
var Speaker = require('speaker');
var Promise = require('es6-promise').Promise;

var SoundTask = function(filename) {

    this.play = function() {
        var promise = new Promise(function(resolve, reject) {
            var lameDecoder = new Lame.Decoder();
            var speaker = new Speaker();
            var stream = fs.createReadStream(filename)
              .pipe(lameDecoder)
              .pipe(speaker);

            // Determine if stream error
            stream.once('error', function() {
                reject('Streaming data error');
            });

            // TODO: Check for decoder exceptions

            // Determine when Speaker has finished
            speaker.once('close', function() {
                resolve('Finished playing');
            });
        });

        return promise;
    };
};

module.exports = SoundTask;
