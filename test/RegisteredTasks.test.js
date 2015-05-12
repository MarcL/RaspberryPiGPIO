var RegisteredTasks = require('../lib/RegisteredTasks');

describe('RegisteredTasks', function() {
    it('should contain no tasks when initialised', function() {
        RegisteredTasks.list().length.should.equal(0);
    });

    it('should contain 1 tasks when one is added', function() {
        RegisteredTasks.add('test');
        RegisteredTasks.list().length.should.equal(1);
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

    it('should return undefined when trying to create a task that does not exist', function() {
        var callback = sinon.spy();
        RegisteredTasks.add('test', callback);

        var task = {type: 'unknown'};
        var returned = RegisteredTasks.create(task);
        expect(returned).to.be.a('undefined');
    });
});