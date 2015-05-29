var TaskFactory = require('../lib/TaskFactory');

describe('TaskFactory', function() {
    it('should throw exception if no tasks passed', function() {
        var fn = function() { new TaskFactory(); };
        expect(fn).to.throw(Error);
    });

    it('should throw correct exception if no tasks passed', function() {
        var fn = function() { new TaskFactory(); };
        expect(fn).to.throw('No tasks found');
    });

    // it('should throw exception if task in config is not registered', function() {
    // 	var config = {
    // 		tasks: [
    // 			{
    // 				type: 'UnknownTask'
    // 			}
    // 		]
    // 	};
    // 	var fn = function() { new TaskFactory(config); };
    // 	expect(fn).to.throw('Task not registered : UnknownTask');
    // });
});
