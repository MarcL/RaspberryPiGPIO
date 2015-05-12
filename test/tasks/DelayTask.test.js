var DelayTask = require('../../lib/tasks/DelayTask');

// TODO: Need to get sinon.useFakeTimers() working corrctly.
describe('DelayTask', function() {

    beforeEach(function(done) {
        done();
    });

    afterEach(function(done) {
        done();
    });

    it('should be fulfilled after timeout', function(done) {
        var timeoutMs = 100;
        var delayTask = new DelayTask(timeoutMs);

        delayTask.execute()
            .should.be.fulfilled
            .notify(done);
    });

    it('should be fulfilled with correct data', function(done) {
        var timeoutMs = 100;
        var delayTask = new DelayTask(timeoutMs);

        delayTask.execute()
            .should.be.fulfilled
            .and.eventually.equal('Finished sleeping: ' + timeoutMs + 'ms')
            .notify(done);
    });
});
