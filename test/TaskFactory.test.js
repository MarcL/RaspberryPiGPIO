var TaskFactory = require('../lib/TaskFactory');
var RegisteredTasks = require('../lib/RegisteredTasks');

describe('TaskFactory', function() {
    var registeredTasksCreateStub;
    beforeEach(function() {
        registeredTasksCreateStub = sinon.stub(RegisteredTasks, 'create');
    });

    afterEach(function() {
        RegisteredTasks.create.restore();
    });

    it('should throw exception if no tasks passed', function() {
        var fn = function() {
            new TaskFactory();
        };
        expect(fn).to.throw(Error);
    });

    it('should throw correct exception if no tasks passed', function() {
        var fn = function() {
            new TaskFactory();
        };
        expect(fn).to.throw('Task list must be defined.');
    });

    it('should throw exception if task list is not an array', function() {
        var fn = function() {
            new TaskFactory('');
        };
        expect(fn).to.throw(Error);
    });

    it('should throw correct exception if task list is not an array', function() {
        var fn = function() {
            new TaskFactory('');
        };
        expect(fn).to.throw('Task list must be an array of tasks.');
    });

    it('should throw exception if task list is empty', function() {
        var fn = function() {
            new TaskFactory([]);
        };
        expect(fn).to.throw(Error);
    });

    it('should throw correct exception if task list is empty', function() {
        var fn = function() {
            new TaskFactory([]);
        };
        expect(fn).to.throw('Task list must not be empty.');
    });

    it('should call registeredTasks create', function() {
        var defaultTasks = [
            { type: 'KnownTask' }
        ];
        new TaskFactory(defaultTasks);
        expect(registeredTasksCreateStub.called).to.be.equal(true);
    });

    it('should call registeredTasks create with expected task', function() {
        var defaultTasks = [
            {type: 'expected type'}
        ];
        new TaskFactory(defaultTasks);
        expect(registeredTasksCreateStub.getCall(0).args[0]).to.be.equal(defaultTasks[0]);
    });

    it('should call registeredTasks create expected number of times', function() {
        var defaultTasks = [
            {type: 'expected type'},
            {type: 'expected type'},
            {type: 'expected type'}
        ];
        new TaskFactory(defaultTasks);
        expect(registeredTasksCreateStub.callCount).to.be.equal(defaultTasks.length);
    });

    it('should call registeredTasks create with expected tasks', function() {
        var defaultTasks = [
            {type: 'expected type'},
            {type: 'expected type 2'},
            {type: 'expected type 3'}
        ];
        new TaskFactory(defaultTasks);
        for (var i = 0; i < defaultTasks.length; i++) {
            expect(registeredTasksCreateStub.getCall(i).args[0]).to.be.equal(defaultTasks[i]);
        }
    });

    it('should return task list containing correct number of registered tasks', function() {
        var MockTask = function() {};

        RegisteredTasks.add('Task1', function() { return new MockTask(); });
        RegisteredTasks.add('Task2', function() { return new MockTask(); });
        var tasks = [
            {
                type: 'Task1'
            },
            {
                type: 'Task2'
            }
        ];
        var taskList = new TaskFactory(tasks);
        expect(taskList.length).to.equal(tasks.length);
        RegisteredTasks.clear();
    });
});
