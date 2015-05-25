# RaspberryPiGPIO
Node.js project to start playing with GPIOs on a Raspberry Pi to trigger sound effects and control additional hardware.

# Prerequisites
On the Raspberry Pi (or Debian/Ubuntu), you will need to ensure that the `alsa.h` header can be found in order to build the [node-speaker](https://github.com/TooTallNate/node-speaker) module. Do this with the following:

```
sudo apt-get install libasound2-dev
```

# Attribution
* [Cuckoo Clock Sound](https://www.freesound.org/people/Syna-Max/sounds/58813/) by [Syna-Max](https://www.freesound.org/people/Syna-Max/) under CC BY-NC 3.0
