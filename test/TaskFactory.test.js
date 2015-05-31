var TaskFactory = require('../lib/TaskFactory');
var RegisteredTasks = require('../lib/RegisteredTasks');
var DelayTask = require('../lib/tasks/DelayTask');
var LedTask = require('../lib/tasks/LedTask');

describe('TaskFactory', function() {
    beforeEach(function(done) {
        RegisteredTasks.add('Delay', function(task) { return new DelayTask(task.time); });
        RegisteredTasks.add('Led', function(task) { return new LedTask(task.gpio, task.time); });
        done();
    });

    afterEach(function(done) {
        RegisteredTasks.clear();
        done();
    });
    it('should throw exception if no tasks passed', function() {
        var fn = function() { new TaskFactory(); };
        expect(fn).to.throw(Error);
    });

    it('should throw correct exception if no tasks passed', function() {
        var fn = function() { new TaskFactory(); };
        expect(fn).to.throw('No tasks found');
    });

    it('should throw exception if task is not registered', function() {
        var tasks = [
            {
                type: 'UnknownTask'
            }
		];
        var fn = function() { new TaskFactory(tasks); };
        expect(fn).to.throw('Task not registered : UnknownTask');
    });

    it('should return task list containing correct number of registered tasks', function() {
        var tasks = [
            {
                type: 'Delay',
                time: 100
            },
            {
                type: 'Led',
                gpio: 2,
                time: 200
            }
        ];
        var taskList = new TaskFactory(tasks);
        expect(taskList.length).to.equal(2);
    });
});
