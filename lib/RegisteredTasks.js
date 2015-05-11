var SoundTask = require('./tasks/SoundTask');
var SleepTask = require('./tasks/SleepTask');

var RegisteredTasks = {
    Sleep: function(task) {
        return new SleepTask(task.time);
    },
    Sound: function(task) {
        return new SoundTask(task.filename);
    }
};

module.exports = RegisteredTasks;
