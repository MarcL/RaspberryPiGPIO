var PiController = require('../lib/PiController');
var RegisteredTasks = require('../lib/RegisteredTasks');
var config = require('../assets/config');

describe('PiController', function() {
    var piController;

    beforeEach(function(done) {
        piController = new PiController(config);
        done();
    });

    it('should add standard tasks to RegisteredTasks', function() {
        expect(RegisteredTasks.list().length).to.equal(5);
    });
});
