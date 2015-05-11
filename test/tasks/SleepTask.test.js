var SleepTask = require('../../lib/tasks/SleepTask');

// TODO: Need to get sinon.useFakeTimers() working corrctly.
describe('SleepTask', function() {

    beforeEach(function(done) {
        done();
    });

    afterEach(function(done) {
        done();
    });

    it('should be fulfilled after timeout', function(done) {
        var timeoutMs = 100;
        var sleepTask = new SleepTask(timeoutMs);

        sleepTask.execute()
            .should.be.fulfilled
            .notify(done);
    });

    it('should be fulfilled with correct data', function(done) {
        var timeoutMs = 100;
        var sleepTask = new SleepTask(timeoutMs);

        sleepTask.execute()
            .should.be.fulfilled
            .and.eventually.equal('Finished sleeping: ' + timeoutMs + 'ms')
            .notify(done);
    });
});
