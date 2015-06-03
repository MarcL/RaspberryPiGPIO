var config = {
    triggers: [
        {
            type: "RandomDelayTrigger",
            name: "random attract",
            taskListName: "attract",
            min: 1000,
            max: 3000
        }
        // {
        //     type: "ButtonTrigger",
        //     name: "push button",
        //     taskListName: "scareMe",
        //     gpio: 4
        // }
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
    }
};

module.exports = config;
