var config = {
    triggers: [
        {
            type: "ButtonTrigger",
            name: "push button",
            taskListName: "attract",
            gpio: 4
        }
    ],
    taskLists: {
        attract: [
            {
                type: "Delay",
                time: 500
            },
            {
                type: "Led",
                gpio: 2,
                time: 1000
            },
            {
                type: "Delay",
                time: 500
            },
            {
                type: "Sound",
                filename: "assets/sound/cuckoo-clock.mp3"
            }
        ]
    },
    tasks: [
        {
        	type: "Delay",
            time: 500
        },
        {
            type: "Led",
            gpio: 2,
            time: 1000
        },
        {
            type: "Delay",
            time: 500
        },
        {
            type: "Sound",
            filename: "assets/sound/cuckoo-clock.mp3"
        }
    ]
};

module.exports = config;
