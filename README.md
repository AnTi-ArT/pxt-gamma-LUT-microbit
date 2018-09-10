# pxt-gamma-lut-microbit
## Gamma Correction
A package for the MakeCode/PXT editor for micro:bit and [Calliope mini](https://calliope.cc).
Adds a block for Gamma-Correcting a LED light value. Works okay with the red LED matrix and the single RGB LED channels.

"Gamma what?" - The eye does not percieve the linear values as "even". See, a LED with brightness "100" does not at all look half as bright as a "200" LED. Gamma correction simply scales down the values on a curve to make LEDs appear more "linear" to the eye. It also saves battery power. And your colors will look more colorfull, instead of just "white".
Based on this [Article by Adafruit](https://learn.adafruit.com/led-tricks-gamma-correction?view=all). I changed the lookup table slightly to use Gamma 2.2 and to have fewer "0"s at the beginning


## How to use:
- Import the github-url as Extension in makecode.calliope.cc or makecode.microbit.org
- Look into "LED" -> "More"
- Input takes your calculated value for the brightness. Or for single RGB channels.
- Output gives a gamma corrected value that you can send to the LED.


## License
MIT


## Supported targets

* for PXT/microbit
* for PXT/calliope
(The metadata above is needed for package search.)

