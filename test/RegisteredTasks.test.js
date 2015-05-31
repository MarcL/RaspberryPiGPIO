var RegisteredTasks = require('../lib/RegisteredTasks');

describe('RegisteredTasks', function() {
    beforeEach(function(done) {
        RegisteredTasks.clear();
        done();
    });

    it('should contain no tasks when initialised', function() {
        RegisteredTasks.list().length.should.equal(0);
    });

    it('should contain 1 tasks when one is added', function() {
        RegisteredTasks.add('test');
        RegisteredTasks.list().length.should.equal(1);
    });

    it('should contain 0 tasks when one is added and then cleared', function() {
        RegisteredTasks.add('test');
        RegisteredTasks.clear();
        RegisteredTasks.list().length.should.equal(0);
    });

    it('should correctly remove task', function() {
        RegisteredTasks.add('test');
        RegisteredTasks.remove('test');
        RegisteredTasks.list().length.should.equal(0);
    });

    it('should throw an error when removing a task that does not exist', function() {
        var fn = function() { RegisteredTasks.remove('test'); };
        expect(fn).to.throw(Error);
    });

    it('should throw correct error when removing a task that does not exist', function() {
        var fn = function() { RegisteredTasks.remove('test'); };
        expect(fn).to.throw('Task has not been registered : test');
    });

    it('should create task when it exists', function() {
        var callback = sinon.spy();
        RegisteredTasks.add('test', callback);

        RegisteredTasks.create({type: 'test'});
        callback.called.should.equal(true);
    });

    it('should create task with correct parameters', function() {
        var callback = sinon.spy();
        RegisteredTasks.add('test', callback);

        var task = {type: 'test'};
        RegisteredTasks.create(task);
        callback.calledWith(task).should.equal(true);
    });

    it('should throw an error when trying to create a task that does not exist', function() {
        var callback = sinon.spy();
        RegisteredTasks.add('test', callback);

        var task = {type: 'UnknownTask'};
        var fn = function() { RegisteredTasks.create(task); };
        expect(fn).to.throw('Task not registered : UnknownTask');
    });
});
