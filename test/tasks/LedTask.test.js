var LedTask = require('../../lib/tasks/LedTask');

describe('LedTask', function() {

    beforeEach(function(done) {
        done();
    });

    afterEach(function(done) {
        done();
    });

    it('should throw an exception when no Gpio is passed', function() {
        var fn = function() { new LedTask(); };
        expect(fn).to.throw(Error);
    });

    it('should throw correct exception when no Gpio is passed', function() {
        var fn = function() { new LedTask(); };
        expect(fn).to.throw('Invalid Gpio');
    });

    it('should throw correct exception when invalid low Gpio ID is passed', function() {
        var fn = function() { new LedTask(1); };
        expect(fn).to.throw('Invalid Gpio : 1');
    });

    it('should throw correct exception when invalid high Gpio ID is passed', function() {
        var fn = function() { new LedTask(28); };
        expect(fn).to.throw('Invalid Gpio : 28');
    });

    it('should not throw an exception when valid Gpio ID is passed', function() {
        var fn = function() { new LedTask(2); };
        expect(fn).to.not.throw(Error);
    });
});
