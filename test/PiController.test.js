var PiController = require('../lib/PiController');
var RegisteredTasks = require('../lib/RegisteredTasks');

describe('PiController', function() {
    it('should add standard tasks to RegisteredTasks', function() {
        new PiController({tasks: []});
        RegisteredTasks.list().length.should.equal(5);
    });
});
